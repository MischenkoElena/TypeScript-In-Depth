import ReferenceItem from "./referenceItem";

export default class Encyclopedia extends ReferenceItem {
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

