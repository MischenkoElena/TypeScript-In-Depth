import ReferenceItem from "./referenceItem";
import { positiveInteger } from "../decorators";

export class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: string) {
      super(title, year);
    }
    private _copies: number;
    get copies():number {
      return this._copies;
    }
    @positiveInteger
    set copies(newVal: number) {
      this._copies = newVal;
    }
    printItem(): void {
      super.printItem();
      console.log(`Edition: ${this.edition} (${this.year})`);
    }
    printCitation(): void {
      console.log(`Citation: ${this.title} - ${this.year}`);
    }
  }

