'use strict';

const bookTitles = [
  // Replace with your own book titles
  'the_great_gatsby',
  'to_kill_the_mockingbird',
  'nineteen_eighty_four',
  '2_states',
  'the_lord_of_the_rings',
  'true_love',
  'muder_mystery',
  'invisible_man',
  'war_and_peace',
  'lord_of_the_flies',
];

const bookId = {
  the_great_gatsby: {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    language: 'English',
  },
  to_kill_the_mockingbird: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    language: 'English',
  },
  nineteen_eighty_four: {
    title: '1984',
    author: 'George Orwell',
    language: 'English',
  },
  '2_states': {
    title: '2 States',
    author: 'Chetan Bhagat',
    language: 'English',
  },
  the_lord_of_the_rings: {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    language: 'English',
  },
  true_love: {
    title: 'True Love: A Practice for Awakening the Heart',
    author: 'Thich Nhat Hanh',
    language: 'English',
  },
  muder_mystery: {
    title: 'Murder Mystery',
    author: 'James Patterson',
    language: 'English',
  },
  invisible_man: {
    title: 'Invisible Man',
    author: 'Ralph Ellison',
    language: 'English',
  },
  war_and_peace: {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    language: 'Russian',
  },
  lord_of_the_flies: {
    title: 'Lord of the Flies',
    author: 'William Golding',
    language: 'English',
  },
};

const bookImg = {
  the_great_gatsby: './img/thegreatgatsby.jpg',
  to_kill_the_mockingbird: './img/mockingbird.jpg',
  nineteen_eighty_four: './img/1984.png',
  '2_states': './img/2states.jpg',
  the_lord_of_the_rings: './img/lordoftherings.jpg',
  true_love: './img/truelove.jpg',
  muder_mystery: './img/mudermystery.jpg',
  invisible_man: './img/invisibleman.jpg',
  war_and_peace: './img/warandpeace.jpg',
  lord_of_the_flies: './img/lordofflies.jpg',
};

function displayBookList(bookId, bookImg) {
  const bookList = document.createElement('ul'); // create an unordered list element
  for (let title in bookId) {
    const bookInfo = bookId[title]; // get the book information for the current title
    const cover = bookImg[title];
    const bookItem = document.createElement('li'); // create a list item element
    bookItem.id = title;
    const titleHeader = document.createElement('h2'); // create a heading element for the title
    titleHeader.textContent = bookInfo.title; // set the text content of the heading to the book title
    const authorParagraph = document.createElement('p'); // create a paragraph element for the author
    authorParagraph.textContent = `Author: ${bookInfo.author}`; // set the text content of the paragraph to the book author
    const languageParagraph = document.createElement('p'); // create a paragraph element for the language
    languageParagraph.textContent = `Language: ${bookInfo.language}`; // set the text content of the paragraph to the book language
    const image = document.createElement('img');
    image.src = cover;

    // append the heading and paragraphs to the list item

    bookItem.appendChild(titleHeader);
    bookItem.appendChild(image);
    bookItem.appendChild(authorParagraph);
    bookItem.appendChild(languageParagraph);

    // append the list item to the list
    bookList.appendChild(bookItem);
  }
  // append the list to the body of the HTML document
  document.body.appendChild(bookList);
}
// call the function to display the book list
displayBookList(bookId, bookImg);
