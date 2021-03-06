const backAPI = new APIHandler()

if (document.querySelector('.follow-btn')) {

    document.querySelector('.follow-btn').addEventListener('click', function (event) {

        backAPI.setFollow(event.target.value)

        const followers = document.getElementById('followers-text')

        if (event.target.innerText.toLowerCase() === 'follow') {

            event.target.innerText = 'unfollow'
            followers.innerText = Number.parseInt(followers.innerText) + 1

        } else {

            event.target.innerText = 'follow'
            followers.innerText = Number.parseInt(followers.innerText) - 1

        }
    })
}