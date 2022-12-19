document.addEventListener('DOMContentLoaded', event => {
    fetchRamen();
});

const menu = document.getElementById('ramen-menu');

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
            menu.appendChild(ramenImg);
        });
    });
}
