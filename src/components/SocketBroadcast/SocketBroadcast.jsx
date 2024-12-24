import { Badge } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { socket } from "../../socket";
import Inbox from "../Inbox/Inbox";
import InboxMessage from "../InboxMessage/InboxMessage";
import MessageBanner from "../MessageBanner/MessageBanner";
import "./SocketBroadcast.scss";

function SocketBroadcast({ userId }) {
    const [broadcastMessage, setBroadcastMessage] = useState({});
    const [inboxMessage, setInboxMessage] = useState([]);
    const [inboxOpen, setInboxOpen] = useState(false);

    const onReceive = (auction) => {
        const id = auction.id;
        const title = auction.title;
        const amount = auction.leading_bid_price.pop();

        setInboxMessage(prev => [{id, title, amount}, ...prev])
        setBroadcastMessage({ id, title })
    }

    useEffect(() => {
        if (userId) {
            socket.emit("addNewUser", userId);
        }
        
        socket.on("newBidBroadcast", (data) => {
            if (data.success) {
                onReceive(data.auction);
            } else {
                console.error("Something went wrong with the notifications");
            }
        });

        return () => {
            socket.off("newBidBroadcast");
        }
    }, [socket, userId]);
    
    return (
        <motion.div 
            className="broadcast"
            initial={{ opacity: 0.5 }}
            whileHover={{ 
                opacity: 1, 
                transition: {
                    ease: "easeInOut",
                    type: "spring"
                }
            }}
        >
            <MessageBanner
                broadcastMessage={ broadcastMessage }
                setBroadcastMessage={ setBroadcastMessage }
            />
            <Badge 
                className="broadcast__notification-badge"
                badgeContent={ inboxMessage.length } 
                max={99}
                color="error"
                aria-label= {`${ inboxMessage.length } notifications unread`}
            >
                <div 
                    className="broadcast__icon"
                    onClick={() => setInboxOpen(prev => !prev)}
                >
                    { inboxOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 208.1L256 65.9 448 208.1l0 47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5l0-47.4zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"/></svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    }
                </div>
            </Badge>
            { inboxOpen &&
                <Inbox>
                    { inboxMessage.map((msg, idx) => (
                        <InboxMessage key={idx} message={msg} />
                    ))}
                </Inbox>
            }
        </motion.div>        
    )
};

export default SocketBroadcast;
