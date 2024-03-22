# Interview Preparation for JavaScript and React

1. SetTimeOut - it gets executed asyncronously
2. Closure - Each inner function has the access to its outer lexical env of its parents. This means it remembers its parent even if it gets executed in some different scope.

/**
function outer(b) {
    let a = 10;
    function inner() {
        console.log(a, b)
    }
    return inner;
}

outer("Hello")()
**/

outer and inner are nested function inner function forms a closure with outer and global env. Arguments are part of outer func.