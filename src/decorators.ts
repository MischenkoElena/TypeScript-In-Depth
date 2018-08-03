export function sealed(parameter: string): Function {
    return function (target: Function): void {
        console.log(`Sealing the constructor ${parameter}`);
        // console.log(target.prototype);
        // Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor: Function = function () {
        console.log('Creating new instance');
        target.prototype.age = 30;
        // target.prototype.printLibrarian = function() {
        //     console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
        // };
    }

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    // console.log(target);
    // console.log(newConstructor.prototype);

    return <TFunction>newConstructor;
}

export function writable(isWriteable: boolean) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor): void {
        console.log(`Now decorating ${methodName} method`);
        descriptor.writable = isWriteable;
    }
}

export function timeout(ms: number) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(`${methodName} will work in ${ms}ms`);
        descriptor.value = () => {
            setTimeout(() => {
                console.log(`!${methodName} is starting!`);
                descriptor.value;
            }, ms);
        }
        return descriptor;
    }
}

export function logParameter(target: Object, methodName: string, parameterIndex: number) {
    var key = `${methodName}_decor_params_indexes`;
    if (Array.isArray(target[key])) {
        target[key].push(parameterIndex);
    }
    else {
        target[key] = [parameterIndex];
    }
}

export function logMethod(target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    descriptor.value = (...args: any[]) => {
        var key = `${methodName}_decor_params_indexes`;
        target[key].forEach((index, i) => {
            console.log('!!!logMethod!!!', `Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${args[index]}`);
        });
    }
    return descriptor;
}

export function format(pref: string = 'Mr./Mrs.') {
    return function (target: Object, propertyName: string) {
        makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
    }
}

export function positiveInteger(target: Object, methodName: string, descriptor: PropertyDescriptor) {
    let val;
    return {
        set: (value) => {
            try {
                if (value < 1 || !((value^0) === value)) {
                    throw 'Copies value should be more then 1 and be integer';
                } else {
                    val = value;
                    console.log(`New copies value = ${value} is setted!`);
                }
            } catch (error) {
                console.log(error);
            }
        },
        get: () => {
            return val;
        },
        enumerable: true,
        configurable: true
    };
}

function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}