function func(a){
    return function(b) {
        return a + b;
    }
}

console.log(func(10)(4));