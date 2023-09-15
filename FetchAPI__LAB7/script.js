
const apiUrl = "books.json";

async function fetchBooks() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }                           

        const data = await response.json();
        displayBooks(data);         
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayBooks(books) {
    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = ''; 

    if (books.length === 0) {
        bookListDiv.textContent = 'No books found.';
        return;
    }

    const ol = document.createElement('ol');
    books.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} written by ${book.author}`;
        ol.appendChild(li);
    });

    bookListDiv.appendChild(ol);
}

// Add a click event listener to the "Fetch Books" button
const fetchBooksButton = document.getElementById('fetchBooks');
fetchBooksButton.addEventListener('click', fetchBooks);
