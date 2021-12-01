import axios from "axios"
const API_URL = 'https://evankurz-personal-website.herokuapp.com/portfolioitems/'

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