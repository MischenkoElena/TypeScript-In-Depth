export function sealed(parameter: string):Function {
    return function(target: Function): void {
        console.log(`Sealing the constructor ${parameter}`);
        console.log(target.prototype);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction):TFunction {
    let newConstructor: Function = function() {
        console.log('Creating new instance');
        target.prototype.age = 30;
        target.prototype.printLibrarian = function() {
            console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
        };
    }

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    console.log(target);
    console.log(newConstructor.prototype);

    return <TFunction>newConstructor;
}