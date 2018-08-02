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

// Task 01
function getAllBooks(): any[] {
  let allBooks: any[] = [
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

function logFirstAvailable(books: any[] = getAllBooks()): void {
  const amount: number = books.length;
  let firstAvailableBook: any;

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
function getBookByID(id: number): any {
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


//Task 05
createCustomer('Ann');
createCustomer('Mary', 28);
createCustomer('Nick', 34, 'London');

const booksJSCategory: string[] = getBookTitlesByCategory();
logBookTitles(booksJSCategory);

logFirstAvailable();

let myBooks = сheckoutBooks('Ann', 1, 2, 4);
myBooks.forEach(book => console.log(`Available book: ${book}`));

//Task 06
let checkedOutBooks = getTitles(true);
checkedOutBooks.forEach(book => console.log(`Books, checked by available=true: ${book}`));
console.log('__________________________________________________________________________');
checkedOutBooks = getTitles('Evan Burchard');
checkedOutBooks.forEach(book => console.log(`Books, checked by author Evan Burchard: ${book}`));

