// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// array as a parameter
function Sandwiches(items: string[]) {
    return ` i want ${items} for my sandwich`
    };
    
let items1 = Sandwiches (["beef", "cheese", "onion"]);  
let items2 = Sandwiches (["chicken", "lettuce", "onion", "tomato"]);
let items3 = Sandwiches (["hotdog", "butter","ketchup","onion" ,"mayo"]); 

console.log(items1);
console.log(items2);
console.log(items3);

