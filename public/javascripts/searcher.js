const searchAPI = new searchAPIHandler()

const usersParentObject = document.querySelector('.user-cards-container')
const gamesParentObject = document.querySelector('.games-cards-container')
const domReferenceObject = document.querySelector('.info-card')

// We show the results screen
document.querySelector('.search-input').addEventListener('click', function (event) {

    document.querySelector('.search-screen').style.opacity = 100
    document.querySelector('.search-screen').style.pointerEvents = 'auto';
})

// We hide the results screen
document.querySelector('.search-input').addEventListener('focusout', function (event) {

    document.querySelector('.search-screen').style.opacity = 0
    document.querySelector('.search-screen').style.pointerEvents = 'none';
})

// We search and display the results
document.querySelector('.search-input').addEventListener('keyup', function (event) {

    // console.log(event.target.value)

    searchAPI.search(event.target.value)
        .then(devuelto => {

            cleanScreen()

            devuelto.data.forEach(elm => {

                const newCard = createCard(elm)

                usersParentObject.appendChild(newCard)

            });
        })
        .catch(err => console.log(err))
})

// We clean the characters from the screen
function cleanScreen() {

    for (let i = usersParentObject.childNodes.length; i > 0; i--) {

        usersParentObject.removeChild(usersParentObject.lastChild)
    }

    for (let i = gamesParentObject.childNodes.length; i > 0; i--) {

        gamesParentObject.removeChild(gamesParentObject.lastChild)
    }
}

// We create a card
function createCard(item) {

    // We clone the reference object
    const createdElement = domReferenceObject.cloneNode(true)

    createdElement.children[0].innerText = item.username

    return createdElement
}