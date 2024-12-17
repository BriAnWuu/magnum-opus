import io from 'socket.io-client';
export const socket = io.connect(
    import.meta.env.VITE_APP_SOCKET_URL || "http://localhost:8080/"
);