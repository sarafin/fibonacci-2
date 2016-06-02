function innerFunc (){
    function fibonacci(n) {
        var a = 0;
        var b = 1;
        for (var i = 3; i <= n; i++) {
            var c = a + b;
            a = b;
            b = c;
        }         
        return "Number Fibonacci = " + b;
    }
    var numArray = prompt("Enter the value of the array");
    var message = fibonacci(numArray);
    alert(message);
}
fibonacci.addEventListener("click", innerFunc);