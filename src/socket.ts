import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_WEB_SERVER_URL);
