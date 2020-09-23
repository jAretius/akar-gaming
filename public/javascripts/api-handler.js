class APIHandler {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://akar-gaming.herokuapp.com/api'
        })
    }

    setFollow = (followeId) => this.app.put(`/follow/${followeId}`)
}