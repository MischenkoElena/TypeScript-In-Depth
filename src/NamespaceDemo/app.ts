/// <reference path='utility-functions.ts' />
import utils = Utility;
import fees = Utility.Fees;

console.log(utils.maxBooksAllowed(16));
console.log(fees.calculateLateFee(6));