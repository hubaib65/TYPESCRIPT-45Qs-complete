// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt( message: string , size: string = "large") {
    console.log(`The size of the shirt is ${size} and the message is ${message}`);
}
let myfunction = make_shirt("I love typescript");
make_shirt( "I love TypeScript", "medium");
make_shirt( "I love JAVAScript","small");