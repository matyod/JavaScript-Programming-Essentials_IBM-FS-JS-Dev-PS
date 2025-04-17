/*
1. In this practice task, you need to create a dynamic button at the time when user-entered details will be shown as output after clicking on **Add Book** button.

2. You need to create a delete button as shown below. For this you need to create a **deletebook** function, which can include the below given partial code.
```html
<button onclick="......")">Delete</button>)
```

3. The **deletebook** function will be called when the user clicks on the delete button. This function will also delete the book's detail in the management system for that particular ID.
> **Note:** The particular ID is the array index number where the details of the particular book is stored.

4. To delete the book's detail you can use array method `splice()` inside **deletebook** function. This method is used to modify the books array, removing a single element starting from the specified index.
```js
books.splice(index, 1);
```

5. This function deletes the book entry at the given index from the books array. After deletion, call the showBooks function to refresh the displayed book list.
*/

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
    <button onclick="editBook(${index})">Edit</button>
    <button onclick="deleteBook(${index})">Delete</button>`;
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

function deleteBook(index) { 
  books.splice(index, 1);
  showBooks();
}