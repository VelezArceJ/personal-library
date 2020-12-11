const submit = document.querySelector('#add-book');
const cardGroup = document.querySelector('.card-group');
const remove = document.querySelectorAll('.btn-danger');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

let libraryAddition = [];

let addBook = function(arr) {
    let columnspec = document.createElement('div');
    columnspec.classList.add("col-lg-3", "col-md-4", "col-sm-12");
    columnspec.setAttribute('id', `${arr[0]}-${arr[1]}`)

    let card = document.createElement('div');
    card.classList.add('card', 'mt-3');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add("card-header", "bg-dark");
    let cardTitle = document.createElement('h4');
    cardTitle.classList.add('text-white', 'text-center', 'font-weight-bold');
    cardTitle.innerHTML = arr[0];

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardAuthor = document.createElement('h4');
    cardAuthor.classList.add('card-title', 'text-center');
    cardAuthor.innerHTML = arr[1];
    let cardPages = document.createElement('p');
    cardPages.classList.add('card-text', 'text-center');
    cardPages.innerHTML = 'PAGES: ' + arr[2];

    let formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    let selectGroup = document.createElement('select');
    selectGroup.classList.add('form-control');
    selectGroup.setAttribute('id', 'read');
    let selectOptionOne = document.createElement('option');
    selectOptionOne.setAttribute('value', 'read');
    selectOptionOne.innerHTML = 'READ';
    let selectOptionTwo = document.createElement('option');
    selectOptionTwo.setAttribute('value', 'not-read');
    selectOptionTwo.innerHTML = 'NOT READ';

    if(arr[3] === 'read') {
        selectOptionOne.setAttribute('selected', 'true')
    } else {
        selectOptionTwo.setAttribute('selected', 'true')
    }

    let removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-danger', 'btn-block');
    removeButton.innerHTML = 'REMOVE'


    cardGroup.appendChild(columnspec);
    columnspec.appendChild(card);
    card.appendChild(cardHeader);
    cardHeader.appendChild(cardTitle);
    card.appendChild(cardBody);
    cardBody.appendChild(cardAuthor);
    cardBody.appendChild(cardPages);
    cardBody.appendChild(formGroup);
    formGroup.appendChild(selectGroup);
    selectGroup.appendChild(selectOptionOne);
    selectGroup.appendChild(selectOptionTwo);
    cardBody.appendChild(removeButton);


    libraryAddition = [];
    title.value = ''
    author.value = ''
    pages.value = ''
};

submit.addEventListener('click', function() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    if (title === "" || author === "") {
        return;
    }
    
    libraryAddition.push(title);
    libraryAddition.push(author);
    libraryAddition.push(pages);
    libraryAddition.push(read);
    
    addBook(libraryAddition);
})

document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-danger')) {
        e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode)
    }
})