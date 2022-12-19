document.addEventListener('DOMContentLoaded', event => {
    fetchRamen();
});

const menu = document.getElementById('ramen-menu');
const ramenDetail = document.getElementById('ramen-detail');

const form = document.getElementById('new-ramen');
form.addEventListener('submit', (event) => {
    event.preventDefault();
});

function fetchRamen() {
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => {
        ramens.forEach(ramen => {
            const ramenImg = document.createElement('img');
            ramenImg.src = ramen.image;
            ramenImg.addEventListener('click', () => {
                onRamenClick(ramen);
            });
            menu.appendChild(ramenImg);
        });
    });
}

function onRamenClick(ramenData) {
    const detailImg = document.querySelector('#ramen-detail .detail-image');
    const detailName = document.querySelector('#ramen-detail .name');
    const deatilRestaurant = document.querySelector('#ramen-detail .restaurant');
    const rating = document.getElementById('rating-display');
    const comment = document.getElementById('comment-display');

    detailImg.src = ramenData.image;
    detailName.textContent = ramenData.name;
    deatilRestaurant.textContent = ramenData.restaurant;
    rating.textContent = ramenData.rating;
    comment.textContent = ramenData.comment;
}
