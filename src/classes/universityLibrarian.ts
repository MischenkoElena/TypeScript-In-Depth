import * as interfaces from "../intefaces";
import { sealed, logger } from "../decorators";

@sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements interfaces.Librarian {
  name: string;
  email: string; //'UniversityLibrarian@email.com'
  department: string; //'Science'
  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting to ${custName}`);
  }
}