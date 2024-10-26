import axios from "axios";

const api = axios.create({
    baseURL: "https://activity-manager-z80k.onrender.com/",
    });

export default api;