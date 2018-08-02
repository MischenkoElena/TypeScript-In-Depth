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

function logFirstAvailable(books: any[]): void {
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

function getBookTitlesByCategory(category: Category): Array<string> {
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

//Task 01
logFirstAvailable(getAllBooks());

//Task 02
const booksJSCategory: string[] = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(booksJSCategory);

//Task 03 
booksJSCategory.forEach((title, i) => console.log(`Book #${++i} via forEach: ${title}`));
console.log(getBookByID(1));
console.log(getBookByID(4));

//Task 04
const myID = createCustomerID('Ann', 10);
console.log(myID);
let idGenerator: (s1: string, s2: number) => string;
idGenerator = createCustomerID;
console.log(idGenerator('Max', 4));
