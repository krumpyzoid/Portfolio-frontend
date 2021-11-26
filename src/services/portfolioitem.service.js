import axios from "axios"
const API_URL = 'http://localhost:1337/portfolioitems/'

class PortfolioItemService {
    getAll() {
        return axios.get(API_URL)
            .then(res => {
                return res.data
            });
        }
    getAllFiltered(filters) {
        return axios.get(API_URL + filters)
            .then(res => {
                return res.data
            });
    }
}

export default new PortfolioItemService()