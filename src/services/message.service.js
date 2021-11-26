import axios from "axios"
import authHeader from "./auth-header"
const API_URL = 'http://localhost:5000/api/messages/'

class MessageService {
    getAll() {
        return axios.get(API_URL, { headers: authHeader() })
            .then(res => {
                return res.data
            });
    }
    getOne(id) {
        return axios.get(API_URL + id, { headers: authHeader() })
            .then(res => {
                return res.data
            });
    }
    editOne(id, newmessage) {
        return axios.get(API_URL + id, newmessage, { headers: authHeader() })
            .then(res => {
                return res.data
            });
    }
}

export default new MessageService()