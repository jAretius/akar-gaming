const searchAPI = new APIHandler()

const usersParentObject = document.querySelector('.user-cards-container')
const gamesParentObject = document.querySelector('.games-cards-container')
const domReferenceObject = document.querySelector('.info-card')
const searchInput = document.querySelector('.search-input')

// We show the results screen
document.querySelector('.search-input').addEventListener('focusin', function (event) {

    document.querySelector('.search-screen').style.opacity = 100
    document.querySelector('.search-screen').style.pointerEvents = 'auto';

    searchAll()
})

// We hide the results screen
document.querySelector('.search-input').addEventListener('focusout', function (event) {

    document.querySelector('.search-screen').style.opacity = 0
    document.querySelector('.search-screen').style.pointerEvents = 'none';
})

// We search and display the results
document.querySelector('.search-input').addEventListener('keyup', function (event) {

    searchAll()

})

window.onload = () => cleanScreen()

function searchAll() {

    if (searchInput.value !== '') {

        searchUsers()

        searchGames()
    } else {

        cleanScreen()
    }
}

function searchUsers() {

    searchAPI.searchUsers(searchInput.value)
        .then(devuelto => {

            cleanUsers()

            devuelto.data.forEach(elm => {

                const newCard = createUserCard(elm)

                usersParentObject.appendChild(newCard)
            });
        })
        .catch(err => console.log(err))
}

function searchGames() {

    searchAPI.searchGames(searchInput.value)
        .then(devuelto => {

            cleanGames()

            devuelto.data.forEach(elm => {

                const newCard = createGameCard(elm)

                gamesParentObject.appendChild(newCard)
            });
        })
        .catch(err => console.log(err))
}

// We clean the characters from the screen
function cleanScreen() {

    for (let i = usersParentObject.childNodes.length; i > 0; i--) {

        usersParentObject.removeChild(usersParentObject.lastChild)
    }

    for (let i = gamesParentObject.childNodes.length; i > 0; i--) {

        gamesParentObject.removeChild(gamesParentObject.lastChild)
    }
}

function cleanUsers() {

    for (let i = usersParentObject.childNodes.length; i > 0; i--) {

        usersParentObject.removeChild(usersParentObject.lastChild)
    }
}

function cleanGames() {

    for (let i = gamesParentObject.childNodes.length; i > 0; i--) {

        gamesParentObject.removeChild(gamesParentObject.lastChild)
    }
}

// We create a card for the user
function createUserCard(item) {

    // We clone the reference object
    const createdElement = domReferenceObject.cloneNode(true)
    const username = createdElement.querySelector('#username')

    // We set the username text and its link
    username.innerText = item.username
    username.setAttribute('href', `/users/${item.username}`)

    createdElement.querySelector('#image-link').setAttribute('href', `/users/${item.username}`)
    createdElement.querySelector('#image-link').querySelector('#profile-image').setAttribute('src', `${item.profileImage}`)

    return createdElement
}

// We create a card for the games
function createGameCard(item) {

    // We clone the reference object
    const createdElement = domReferenceObject.cloneNode(true)
    const username = createdElement.querySelector('#username')

    // We set the username text and its link
    username.innerText = item.title
    username.setAttribute('href', `/games/${item._id}`)

    createdElement.querySelector('#image-link').setAttribute('href', `/games/${item._id}`)
    createdElement.querySelector('#image-link').querySelector('#profile-image').setAttribute('src', `${item.image}`)

    return createdElement
}