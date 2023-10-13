async function fetchCatImages() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?page=1&limit=10');
        const data = await response.json();
        const catContainer = document.getElementById('catContainer');

        data.forEach(cat => {
            const cardCol = document.createElement('div');
            cardCol.className = 'col-md-4 mb-4';

            const card = document.createElement('div');
            card.className = 'card';

            const imageContainer = document.createElement('div');
            imageContainer.className = 'card-img-top';

            const image = document.createElement('img');
            image.src = cat.url;
            image.style.maxWidth = '100%';
            image.style.height = 'auto';

            image.alt = 'Cat Image';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = 'This is a beautiful cat!';

            imageContainer.appendChild(image);
            card.appendChild(imageContainer);
            card.appendChild(cardBody);
            card.appendChild(cardText);
            cardCol.appendChild(card);

            catContainer.appendChild(cardCol);
        });
    } catch (error) {
        console.error('Error fetching cat images:', error);
    }
}

fetchCatImages();

document.getElementById('loadMore').addEventListener('click', () => {
    fetchCatImages();
});
