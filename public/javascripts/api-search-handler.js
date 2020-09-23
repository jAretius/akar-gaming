class searchAPIHandler {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://akar-gaming.herokuapp.com/api'
        })
    }

    search = (inputText) => this.app.get(`/search/${inputText}`)
}