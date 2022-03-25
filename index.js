function namedFunction(thing) {
    return thing;
}

function receivesAFunction(callBack) {
    return callBack();
}

function returnsANamedFunction() {
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        
    };
}

receivesAFunction(1 + 1);

returnsANamedFunction();

returnsAnAnonymousFunction();

