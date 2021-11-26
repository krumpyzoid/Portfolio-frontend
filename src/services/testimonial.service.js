import axios from "axios"
import authHeader from "./auth-header"
const API_URL = 'http://localhost:5000/api/testimonials/'

class TestimonialService {
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
    async createOne(newmessage) {
        await axios.post(API_URL + '/add', newmessage, { headers: authHeader() })
    }
    async editOne(id, newmessage) {
        await axios.put(API_URL + id, newmessage, { headers: authHeader() })
    }
    async deleteOne(id) {
        await axios.delete(API_URL + id, { headers: authHeader() })
    }
}

export default new TestimonialService()