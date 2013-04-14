
// navigate to bing.com (hp_table is on the page) 
// or change hp_table to the id of a table on any 
// site

var elem = document.getElementById('hp_table')

//var o = Object.getPrototypeOf( elem )
var o = Object.getPrototypeOf( Object.getPrototypeOf( Object.getPrototypeOf( Object.getPrototypeOf( Object.getPrototypeOf( elem ) ) ) ) )

console.log(o.constructor)
console.log(Object.getOwnPropertyNames(o).length)

