import { useEffect, useState } from "react";
import "./MessageBanner.scss";

function MessageBanner({ broadcastMessage, setBroadcastMessage }) {
    const [hovered, setHovered] = useState(false);
    
    useEffect(() => {
        if (!hovered) {
            const timer = setTimeout(() => setBroadcastMessage(""), 15000);
            return () => clearTimeout(timer);
        }
    }, [hovered]);

    if (!broadcastMessage.trim()) return null;

    return (
        <span 
            className="broadcast__message"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            { broadcastMessage }
        </span>
    )
};

export default MessageBanner;
