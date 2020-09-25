class APIHandler {

    constructor() {
        this.app = axios.create({
            //baseURL: 'https://akar-gaming.herokuapp.com/api'
            baseURL: 'http://localhost:3000/api'
        })
    }

    setFollow = (followeId) => this.app.put(`/follow/${followeId}`)
    searchUsers = (inputText) => this.app.get(`/search/users/${inputText}`)
    searchGames = (inputText) => this.app.get(`/search/games/${inputText}`)
}