// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// array as a parameter
function Sandwiches(items) {
    return " i want ".concat(items, " for my sandwich");
}
;
var items1 = Sandwiches(["beef", "cheese", "onion"]);
var items2 = Sandwiches(["chicken", "lettuce", "onion", "tomato"]);
var items3 = Sandwiches(["hotdog", "butter", "ketchup", "onion", "mayo"]);
console.log(items1);
console.log(items2);
console.log(items3);
