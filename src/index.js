fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(allRamens => {
        renderRamenMenu(allRamens)
        renderRamen(allRamens[0])
    })

function renderRamenMenu(allRamens) {
    allRamens.forEach((ramen) => {
        // loop code
        const ramenImg = document.createElement('img')
        ramenImg.src = ramen.image
        ramenImg.alt = 'Tasty Ramen'

        ramenImg.addEventListener('click', (event) => {
            renderRamen(ramen)
        })

        document.querySelector('#ramen-menu').append(ramenImg)
    })
}

function renderRamen(ramen) {
    const detailImg = document.querySelector('.detail-image')
    detailImg.src = ramen.image
    detailImg.alt = ramen.name

    const detailName = document.querySelector('.name')
    detailName.textContent = ramen.name

    const restName = document.querySelector('.restaurant')
    restName.textContent = ramen.restaurant

    const detailRating = document.querySelector('#rating-display')
    detailRating.textContent = ramen.rating

    const detailComment = document.querySelector('#comment-display')
    detailComment.textContent = ramen.comment
}


function setUpRamenForm() {
    const ramenForm = document.querySelector('#new-ramen')
    ramenForm.addEventListener('submit', (event) => {
        event.preventDefault()

        document.querySelector('#new-name').value
        
        const newRamen = {
            "name": event.target.name.value,
            // "name": document.querySelector('#new-name').value,
            // "restaurant": event.target.restaurant.value,
            "image": event.target.image.value,
            "rating": event.target.rating.value,
            "comment": event.target["new-comment"].value
        }
        
        renderRamenMenu([newRamen])
    })
}
setUpRamenForm()

function setUpCommentForm() {
    const editForm = document.querySelector('#edit-ramen')
    editForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const newRating = document.querySelector('#new-rating2').value
        const newComment = document.querySelector('#new-comment2').value

        document.querySelector('#rating-display').textContent = newRating
        document.querySelector('#comment-display').textContent = newComment
    })
}
setUpCommentForm()