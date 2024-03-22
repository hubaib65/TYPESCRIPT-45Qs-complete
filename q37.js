// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(message, size) {
    if (size === void 0) { size = "large"; }
    console.log("The size of the shirt is ".concat(size, " and the message is ").concat(message));
}
var myfunction = make_shirt("I love typescript");
make_shirt("I love TypeScript", "medium");
make_shirt("I love JAVAScript", "small");
