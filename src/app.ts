import { UniversityLibrarian } from './classes/universityLibrarian';
import { Book, Magazine, Librarian } from "./intefaces";
import { Category } from "./enums";
import { RefBook, Shelf } from "./classes";
import { purge } from "./lib/utility-functions";
import { Encyclopedia } from './classes/encyclopedia';

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// Task 01
function getAllBooks(): Book[] {
  let allBooks: Book[] = [
    {
      id: 1,
      title: "Refactoring JavaScript",
      author: "Evan Burchard",
      category: Category.JavaScript,
      available: true
    },
    {
      id: 2,
      title: "JavaScript Testing",
      author: "Liang Yuxian Eugene",
      category: Category.JavaScript,
      available: false
    },
    {
      id: 3,
      title: "CSS Secrets",
      author: "Lea Verou",
      category: Category.CSS,
      available: true
    },
    {
      id: 4,
      title: "Mastering JavaScript Object-Oriented Programming",
      author: "Andrea Chiarelli",
      category: Category.JavaScript,
      available: true
    }
  ];
  return allBooks;
}

function logFirstAvailable(books: Book[] = getAllBooks()): void {
  const amount: number = books.length;
  let firstAvailableBook: Book;

  for (let book of books) {
    if (book.available) {
      firstAvailableBook = book;
      break;
    }
  }

  console.log(`Books amount ${amount}`);
  console.log(`First book name: ${firstAvailableBook.title}`);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const allBooks = getAllBooks();
  let bookTitles: string[] = [];

  for (let book of allBooks) {
    if (book.category === category) {
      bookTitles.push(book.title);
    }
  }
  return bookTitles;
}

function logBookTitles(titles: string[]): void {
  titles.forEach((title, i) => console.log(`Book #${++i}: ${title}`));
}

//Task 03
function getBookByID(id: number): Book | undefined {
  const allBooks = getAllBooks();
  return allBooks.find(book => book.id === id);
}

//Task 04
function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

//Task 05
function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Client name: ${name}`);
  if (age) {
    console.log(`Client age: ${age}`);
  }
  if (city) {
    console.log(`Client city: ${city}`);
  }
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Checking books for customer ${customer}`);
  let checkedBooks: string[] = [];
  bookIDs.forEach(id => {
    const book = getBookByID(id);
    if (book.available) {
      checkedBooks.push(book.title);
    }
  });
  return checkedBooks;
}

//Task 06 
function getTitles(author: string);
function getTitles(available: boolean);
function getTitles(parameter: string | boolean): string[] {
  const allBooks = getAllBooks();
  let bookTitles: string[] = [];
  let bookProperty: string = '';

  if (typeof parameter === 'string') {
    bookProperty = 'author';
  }
  if (typeof parameter === 'boolean') {
    bookProperty = 'available';
  }

  allBooks.forEach(book => {
    if (book[bookProperty] === parameter) {
      bookTitles.push(book.title);
    }
  });

  return bookTitles;
}

//Task 07
function printBook(book: Book): void {
  console.log(`Prinded book: ${book.title} by ${book.author}`);
}

//Task 18
const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
]; 
// const purgedArr = purge(inventory);
// console.log('Purged inventory', purgedArr);
// const purgedNumberArr = purge([1, 2, 3, 4, 5]);
// console.log('Purged numbers', purgedNumberArr);

//Task 19
const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst());

const magazines: Magazine[] = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
console.log(magazineShelf.getFirst());

//Task 20
console.log('----- Print all magazines -----');
magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));

//Task 21
const fLibrarian = new UniversityLibrarian();

//Task 22
console.log('--------------- Decorators --------------');
fLibrarian.name = 'Anna';
// fLibrarian.printLibrarian();

//Task 23
fLibrarian.assistFaculty = () => { console.log('Modified assistFaculty method') };
fLibrarian.assistFaculty();
try {
  fLibrarian.teachCommunity = () => { console.log('Modified teachCommunity method') };
} catch (error) {
  // console.log('teachCommunity is not writeable');
}
fLibrarian.teachCommunity();

//Task 24
const encyclopedia = new Encyclopedia('Title for decorator', 1998, 'Edition for decorator');
encyclopedia.printItem();

//Task 25
fLibrarian.assistCustomer('Vasilii', 10);

//Task 26
fLibrarian.name = 'Mark';
console.log('Formatted librarian name', fLibrarian.name);

//Task 27
console.log('--------------- Accessor Decorators --------------');
encyclopedia.copies = -10;
encyclopedia.copies = 0;
encyclopedia.copies = 4.5;
encyclopedia.copies = 10;

