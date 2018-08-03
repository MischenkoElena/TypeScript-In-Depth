import * as interfaces from "../intefaces";
import { sealed, logger, writable, logParameter, logMethod, format } from "../decorators";

@sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements interfaces.Librarian {
  @format('Mr.')
  name: string;
  email: string; //'UniversityLibrarian@email.com'
  department: string; //'Science'

  @logMethod
  assistCustomer(@logParameter custName: string, @logParameter time: number): void {
    console.log(`${this.name} is assisting to ${custName} from ${time}a.m.`);
  }

  printLibrarian(): void {
    // console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
    console.log(`Librarian name:  ${this.name}`);
  }

  @writable(true)
  assistFaculty(): void {
    console.log('Assisting faculty');
  }

  @writable(false)
  teachCommunity(): void {
    console.log('Teaching community');
  }
}