import { timeout } from "../decorators";

export default abstract class ReferenceItem {
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

  @timeout(300) 
  printItem(): void {
    console.log(`${this.title} (${ReferenceItem.department} department) was published in ${this.year}`);
  };
  abstract printCitation(): void;
}