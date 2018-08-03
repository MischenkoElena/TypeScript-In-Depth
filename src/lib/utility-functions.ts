import { Book, LibMgrCallback } from "../intefaces";
import { Category } from "../enums";

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Book[] {
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

export function logFirstAvailable(books: Book[] = getAllBooks()): void {
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

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const allBooks = getAllBooks();
    let bookTitles: string[] = [];

    for (let book of allBooks) {
        if (book.category === category) {
            bookTitles.push(book.title);
        }
    }
    return bookTitles;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            let tutles = getBookTitlesByCategory(category);
            if (tutles.length) {
                callback(null, tutles);
            } else {
                throw new Error('No books found.');
            }
        } catch (error) {
            callback(error, null);            
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<Array<string>> {
    const p: Promise<Array<string>> = new Promise((resolve, reject) => {
        setTimeout(() => {
                let titles = getBookTitlesByCategory(category);
                if (titles.length) {
                    resolve(titles);
                } else {
                    reject('No books found.');
                }
        }, 2000);
    
    });
    return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks: string[] = await getBooksByCategoryPromise(category);
    // console.log(foundBooks);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach((title, i) => console.log(`Book #${++i}: ${title}`));
}

export function getBookByID(id: number): Book | undefined {
    const allBooks = getAllBooks();
    return allBooks.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Client name: ${name}`);
    if (age) {
        console.log(`Client age: ${age}`);
    }
    if (city) {
        console.log(`Client city: ${city}`);
    }
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
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

export function getTitles(author: string);
export function getTitles(available: boolean);
export function getTitles(parameter: string | boolean): string[] {
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

export function printBook(book: Book): void {
    console.log(`Prinded book: ${book.title} by ${book.author}`);
}
