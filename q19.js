// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["ahmed", "zaid", "saad", "rayyan", "arbaab", "tahir", "saif"];
console.log("I am inviting ".concat(guestList.length, " people to dinner\n"));
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(i + 1, ".").concat(guestList[i], " I would like to invite you to dinner\n"));
}
