import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_AXIOS_BASE_URL);
