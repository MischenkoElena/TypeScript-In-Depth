showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// Task 02
enum Category {
  JavaScript,
  CSS,
  HTML,
  TypeScript,
  Angular
}

//Task 07
interface Book {
  id: number;
  title: string;
  author: string;
  category: Category;
  available: boolean;
  pages?: number;
  // markDamaged?: (reason: string) => void;
  markDamaged?: DamageLogger;
}

//Task 08
interface DamageLogger {
  (reason: string): void;
}

//Task 09
interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer(custName: string): void;
}

//Task 10
class UniversityLibrarian implements Librarian {
  name: string;
  email: string; //'UniversityLibrarian@email.com'
  department: string; //'Science'
  assistCustomer = (custName: string) => {
    console.log(`${this.name} is assisting to ${custName}`);
  }
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

//Task 07
const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  // year: 2015,
  // copies: 3,
  pages: 200,
  markDamaged: (reason: string) => console.log(`Damaged because of ${reason}`)
};
printBook(myBook);
myBook.markDamaged('missing back cover');

//Task 08
const logDamage: DamageLogger = (reason: string) => console.log(`Logging damage reason: ${reason}`);
logDamage('UFO attack');

//Task 09
let favoriteAuthor: Author = {
  name: 'Vasya Pupkin',
  email: 'vasyapupkin@email.com',
  numBooksPublished: 4
}

let favoriteLibrarian: Librarian = {
  name: 'Peter',
  email: 'peter_librarian@email.com',
  assistCustomer(custName) {
    console.log(`favoriteLibrarian asisting to ${custName}`);
  },
  department: 'Univercity'
}

favoriteLibrarian.assistCustomer('Ann');

//Task 10
let universityLibrarian: Librarian = new UniversityLibrarian();
universityLibrarian.name = 'Oleg';
universityLibrarian.assistCustomer('Ann');

favoriteLibrarian = universityLibrarian;
favoriteLibrarian.name = 'Fedor';
favoriteLibrarian.assistCustomer('Mike');
