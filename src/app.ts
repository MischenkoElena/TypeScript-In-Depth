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
  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting to ${custName}`);
  }
}

//Task 11
abstract class ReferenceItem {
  // constructor(newTitle: string, newYear: number) {
  //   console.log('Creating a new ReferenceItem...');
  //   this.title = newTitle;
  //   this.year = newYear;
  // }
  // title: string;
  // year: number;

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  private _publisher: string;
  get publisher(): string {
    return this._publisher.toUpperCase();
  }
  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  static department: string = 'Biology';

  printItem(): void {
    console.log(`${this.title} (${ReferenceItem.department} department) was published in ${this.year}`);
  }

  abstract printCitation(): void;
}

//Task 12
class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: string) {
    super(title, year);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }

  printCitation(): void {
    console.log(`Citation: ${this.title} - ${this.year}`);
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

//Task 11
// const ref = new ReferenceItem('Test book', 1986);
// ref.printItem();
// ref.publisher = 'The Best Publisher';
// console.log(`Publisher is: ${ref.publisher}`);

//Task 12 
const refBook = new Encyclopedia('Big ecyclopedia', 1960, 'third');
refBook.printItem();

//Task 13
refBook.printCitation();