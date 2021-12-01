import axios from "axios"
import authHeader from "./auth-header"
const API_URL = 'https://evankurz-personal-website.herokuapp.com/messages/'

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
    sendOne(newmessage) {
        return axios.post(API_URL, newmessage)
            .then(res => {
                return res.status
            })
    }
}

export default new MessageService()