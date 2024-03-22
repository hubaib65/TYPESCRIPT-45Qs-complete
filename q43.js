// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magiciansnames = ["hubaib", "kamal", "shahid", "shoaib"];
function show_magicians(magiciansnames) {
    for (var i = 0; i < magiciansnames.length; i++) {
        console.log(magiciansnames[i]);
    }
}
var copyofarray = magiciansnames.slice();
var message = "the great magician";
function make_great(meassge) {
    for (var _i = 0, copyofarray_1 = copyofarray; _i < copyofarray_1.length; _i++) {
        var items = copyofarray_1[_i];
        console.log(meassge + " " + "".concat(items));
    }
}
show_magicians(magiciansnames);
make_great(message);
