// from http://ie.microsoft.com/testdrive/HTML5/TryStrict/

function test() { 
"use strict"; 

    var x = 10; 
    function f() { 
        eval("var x = 5"); 
        return x; // will be 5 if strict removed
    } 
    console.log(f());;
} 
test();