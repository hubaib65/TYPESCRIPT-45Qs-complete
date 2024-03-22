// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magiciansnames = ["hubaib", "kamal", "shahid", "shoaib"];

function show_magicians( magiciansnames : string []) {
    for (let i = 0; i < magiciansnames.length; i++) {
        console.log(magiciansnames[i]);
    }
}
let copyofarray = magiciansnames.slice();
let message = "the great magician";
function make_great( meassge: string ) {
    for (let items of copyofarray) {
        console.log(meassge+" "+ `${items}`);
    }
}
show_magicians(magiciansnames);
make_great(message);
