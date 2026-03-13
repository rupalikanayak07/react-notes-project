import axios from "axios";

export const axiosinstace = axios.create({
    baseURL:'http://localhost:3000/'
})