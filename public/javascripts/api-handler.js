class APIHandler {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:3000/api'
        })
    }

    setFollow = (followeId) => this.app.put(`/follow/${followeId}`)

    // getAllCharacters = () => this.app.get('/characters')
    // getOneCharacter = characterId => this.app.get(`/characters/${characterId}`)
    // createCharacter = characterInfo => this.app.post('/characters', characterInfo)
    // editCharacter = (characterId, characterInfo) => this.app.put(`/characters/${characterId}`, characterInfo)
}