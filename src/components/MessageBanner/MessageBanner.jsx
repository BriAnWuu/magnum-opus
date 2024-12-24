import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./MessageBanner.scss";

function MessageBanner({ broadcastMessage, setBroadcastMessage }) {
    const [hovered, setHovered] = useState(true);
    
    useEffect(() => {
        if (!hovered) {
            // disappear in 10 seconds after read (hover)
            const timer = setTimeout(() => setBroadcastMessage({}), 10000);
            return () => clearTimeout(timer);
        }
    }, [hovered]);

    if (JSON.stringify(broadcastMessage) === "{}") return null;

    return (
        <motion.p 
            className="broadcast__message"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ 
                opacity: 0,
                x: 100,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.5,
                type: "spring",
                ease: "circleIn",
                stiffness: 600,
                damping: 10,
            }}
            viewport={{ once: true }}
        >
            A thrilling new bid has been placed on
            <span>
                { broadcastMessage.title ?
                    ` ${broadcastMessage.title}` : ""
                }
            </span>
            { broadcastMessage.title ? 
                ` (Lot ${broadcastMessage.id})!` : `Lot ${broadcastMessage.id}!`
            }
        </motion.p>
    )
};

export default MessageBanner;
