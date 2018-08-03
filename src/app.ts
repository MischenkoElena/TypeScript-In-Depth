import { UniversityLibrarian } from './classes/universityLibrarian';
import { Book, Magazine, Librarian } from "./intefaces";
import { Category } from "./enums";
import { RefBook, Shelf } from "./classes";
import { purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from "./lib/utility-functions";
import { Encyclopedia } from './classes/encyclopedia';

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

//Task 28
console.log('Callbacks for getBooksByCategory');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);

//Task 29
console.log('Promises for getBooksByCategory');
getBooksByCategoryPromise(Category.JavaScript)
  .then(titles => {
    console.log(titles);
    return titles.length;
  })
  .then(length => console.log(`Books amount = ${length}`))
  .catch(msg => console.log(msg));

//Task 30
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
  .then(titles => console.log(titles))
  .catch(reason => console.log(reason));
console.log('Search submitted...');
