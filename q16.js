"use strict";
// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ["ahmed", "zaid", "saad", "rayyan", "arbaab", "tahir", "saif"];
console.log(guestList);
console.log("i am inviting three more people for dinner");
// adding guest to the beginning of the list 
guestList.unshift("hussain");
console.log(guestList);
// adding guest to the middle of the list 
guestList.splice(5, 0, "mohsin");
console.log(guestList);
// adding guest to the end of the list 
guestList.push("khalid");
console.log(guestList);
// print all guests again with the invitation message
for (var i = 0; i < guestList.length; i++) {
    console.log("i am inviting ".concat(guestList[i], " for dinner"));
}
