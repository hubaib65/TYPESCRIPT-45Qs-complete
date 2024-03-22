// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("unfortunatly, i can not invite you guys to my dinner because table is already full\n");
// removing eight Elements from the last of the list
var guest1 = guestList.pop();
console.log("sorry i can not invite you ".concat(guest1, " to my dinner"));
var guest2 = guestList.pop();
console.log("sorry i can not invite you ".concat(guest2, " to my dinner"));
var guest3 = guestList.pop();
console.log("sorry i can not invite you ".concat(guest3, " to my dinner"));
var guest4 = guestList.pop();
console.log("sorry i can not invite you ".concat(guest4, " to my dinner"));
var guest5 = guestList.pop();
console.log("sorry i can not invite you ".concat(guest5, " to my dinner"));
var guest6 = guestList.pop();
console.log("sorry i can not invite you ".concat(guest6, " to my dinner"));
var guest7 = guestList.pop();
console.log("sorry i can not invite you ".concat(guest7, " to my dinner"));
var guest8 = guestList.pop();
console.log("sorry i can not invite you ".concat(guest8, " to my dinner\n"));
for (var i = 0; i < 2; i++) {
    console.log("Mr. ".concat(guestList[i], ", you are still invited to my dinner\n"));
}
// making an empty list
guestList.pop();
guestList.pop();
console.log(guestList);
