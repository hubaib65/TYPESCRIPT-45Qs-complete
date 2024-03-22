// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magiciansnames = ["hubaib", "kamal", "shahid", "shoaib"];
function show_magicians(magiciansnames) {
    for (var i = 0; i < magiciansnames.length; i++) {
        // console.log(magiciansnames[i]);
    }
}
var message = "the great magician";
function make_great(meassge) {
    for (var i = 0; i < magiciansnames.length; i++) {
        console.log(meassge + " " + magiciansnames[i]);
    }
}
show_magicians(magiciansnames);
make_great(message);
