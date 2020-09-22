class CharactersApiHandler {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        })
    }

    getAllCharacters = () => this.app.get('/characters')
    getOneCharacter = characterId => this.app.get(`/characters/${characterId}`)
    createCharacter = characterInfo => this.app.post('/characters', characterInfo)
    editCharacter = (characterId, characterInfo) => this.app.put(`/characters/${characterId}`, characterInfo)
}