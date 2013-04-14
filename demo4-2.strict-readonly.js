// from http://ie.microsoft.com/testdrive/HTML5/TryStrict/

"use strict";  

var obj = {}; 

Object.defineProperty(obj, "prop",  
{ value: "Don’t tread on me", writable: false });  

obj.prop = "New value"; // throws error when strict on. 
                        // no change and no error when strict off 

console.log(obj.prop);