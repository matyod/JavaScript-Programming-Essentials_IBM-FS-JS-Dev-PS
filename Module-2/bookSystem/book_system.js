let books = [];

function addBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const bookDescription = document.getElementById('bookDescription').value;
  const pagesNumber = document.getElementById('pagesNumber').value;

  console.log("isNaN(pagesNumber)", isNaN(pagesNumber));

  if (bookName && authorName && bookDescription && pagesNumber && !isNaN(Number(pagesNumber))) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber,
    };

    books.push(book);
    showBooks();
    clearInputs();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function showBooks() {
  const booksDiv = books.map((book, index) => {
    return `<h3>Book no.: ${index + 1}</h3>
    <p>Book Name: ${book.name}</p>
    <p>Book Author: ${book.authorName}</p>
    <p>Book Description: ${book.bookDescription}</p>
    <p>No. of Pages: ${book.pagesNumber}</p>
    <button onclick="editBook(${index})">Edit book</button>`;
  });

  document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {

  // using spread operator [...] to expand or unpack elements of iterables into individual elements 
  const inputs = [...document.getElementsByTagName('input'), ...document.getElementsByTagName('textarea')]

  inputs.forEach(input => {
    input.value = '';
  });
}

function editBook(index) {
  const book = books[index];
  const addBookBtn = document.getElementById('addBookBtn');

  const confirmEditBtn = document.createElement('button');
  const btnText = document.createTextNode("Confirm Edit");
  confirmEditBtn.appendChild(btnText);

  confirmEditBtn.setAttribute('id', 'confirmEditBtn');
  confirmEditBtn.setAttribute('onclick', `confirmEdit(${index})`);

  addBookBtn.insertAdjacentElement('afterend', confirmEditBtn);

  document.getElementById('bookName').value = book.name;
  document.getElementById('authorName').value = book.authorName;
  document.getElementById('bookDescription').value = book.bookDescription;
  document.getElementById('pagesNumber').value = book.pagesNumber;
}

function confirmEdit(index) {
  const confirmEditBtn = document.getElementById('confirmEditBtn');
  confirmEditBtn.remove();

  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const bookDescription = document.getElementById('bookDescription').value;
  const pagesNumber = document.getElementById('pagesNumber').value;

  if (bookName && authorName && bookDescription && pagesNumber && !isNaN(Number(pagesNumber))) {

    books[index].name = bookName;
    books[index].authorName = authorName;
    books[index].bookDescription = bookDescription;
    books[index].pagesNumber = pagesNumber;
    showBooks();
    clearInputs();
  } else {
    alert("Please fill in all fields correctly.");
  }
}