const ramenMenu = document.querySelector('#ramen-menu')
const detailImg = document.querySelector('#detail-image')
const detailName = document.querySelector('#detail-name')
const detailRest = document.querySelector('#detail-restaurant')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const newRamenForm = document.querySelector('#new-ramen')

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => {
    data.forEach(ramen => {
        addToMenu(ramen)
    })
})

function addToMenu(ramen) {
    const img = document.createElement('img')
    img.src = ramen.image
    img.alt = ramen.name
    ramenMenu.append(img)

    img.addEventListener('click', event => {
        detailImg.src = ramen.image
        detailImg.alt = ramen.name
        detailName.textContent = ramen.name
        detailRest.textContent = ramen.restaurant
        rating.textContent = ramen.rating
        comment.textContent = ramen.comment
    })
}

newRamenForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const newName = event.target.name.value
    const newRest = event.target.restaurant.value
    const newImg = event.target.image.value
    const newRating = event.target.rating.value
    const newComment = event.target['new-comment'].value

    const newRamen = {
        "name": newName,
        "restaurant": newRest,
        "image": newImg,
        "rating": newRating,
        "comment": newComment
    }

    addToMenu(newRamen)
})