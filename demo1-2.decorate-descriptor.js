var oldDesc = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML");
var newDesc = {
  set: function(text){
    console.log("innerHTML was set to: " + text);
    oldDesc.set.call(this, text);	
  }
}

console.log(oldDesc)
console.log(newDesc)

Object.defineProperty(HTMLElement.prototype, "innerHTML", newDesc);