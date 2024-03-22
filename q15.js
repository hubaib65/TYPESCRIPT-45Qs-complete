"use strict";
// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ["ahmed", "zaid", "saad", "rayyan", "arbaab", "tahir", "saif"];
// removing a person who is not coming
console.log("due to some reason ".concat(guestList[3], " can't make it\n"));
// replacing the new friend in the list
guestList[3] = "khalid";
// printing the new list
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", I would like to invite you to dinner\n"));
}
