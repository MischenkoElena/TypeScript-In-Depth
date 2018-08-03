import { Category } from "./enums";

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

interface DamageLogger {
  (reason: string): void;
}

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

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
} 

export { Book, DamageLogger, Author, Librarian, DamageLogger as Logger, Magazine, ShelfItem };