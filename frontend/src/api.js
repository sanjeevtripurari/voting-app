import axios from "axios";

const API = "http://localhost:5000";

export const vote = (type) => axios.post(`${API}/vote`, { vote: type });

export const getSummary = () => axios.get(`${API}/vote/summary`);

export const getTimeline = () => axios.get(`${API}/vote/timeline`);