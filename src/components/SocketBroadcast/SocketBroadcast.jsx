import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./SocketBroadcast.scss";

export const socket = io.connect(
    import.meta.env.VITE_APP_SOCKET_URL || "http://localhost:8080/"
);

function SocketBroadcast({ userId }) {
    const [broadcastMessage, setBroadcastMessage] = useState("");

    const onReceive = (message) => {
        setBroadcastMessage(message)
    }

    useEffect(() => {
        socket.on("test_broadcast", (data) => {
            onReceive(data.message);
        });

        if (userId) {
            socket.emit("addNewUser", userId);
        }

        return () => {
            socket.off("test_broadcast");
        }
    }, [socket, userId]);
    
    return (
        
        <motion.div 
            className="broadcast"
            initial={{ opacity: 0.7 }}
            whileHover={{ 
                opacity: 1, 
                transition: {
                    ease: "easeInOut",
                    type: "spring"
                }
            }}
        >
            { broadcastMessage.trim() &&
                <div className="broadcast__message">
                    { broadcastMessage }
                </div>
            }
            <div className="broadcast__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                <div className="broadcast__notification-counter">!</div>
            </div>
        </motion.div>
        
    )
};

export default SocketBroadcast;
