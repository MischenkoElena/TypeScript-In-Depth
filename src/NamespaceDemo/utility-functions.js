var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is private');
    }
})(Utility || (Utility = {}));
