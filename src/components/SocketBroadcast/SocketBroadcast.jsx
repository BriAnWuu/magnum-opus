import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./SocketBroadcast.scss";

export const socket = io.connect(
    import.meta.env.VITE_APP_SOCKET_URL || "http://localhost:8080/"
);

function SocketBroadcast(prop) {
    const [broadcastMessage, setBroadcastMessage] = useState("");

    const onReceive = (message) => {
      setBroadcastMessage(message)
    }

    useEffect(() => {
        socket.on('connect', () => {
            // do something
        });

        socket.on('test_broadcast', (data) => {
            onReceive(data.message)
        });

        return () => {
            socket.off('connect');
            socket.off('test_broadcast');
        }
    }, []);
    
    return (
        <>
            <div className="broadcast">
                { broadcastMessage.trim() &&
                    <div className="broadcast__message">
                        { broadcastMessage }
                    </div>
                }
                <div className="broadcast__icon">message icon</div>
            </div>
        </>
    )
};

export default SocketBroadcast;
