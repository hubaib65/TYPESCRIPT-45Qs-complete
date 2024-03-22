// 31.No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed. 
var users = ["admin", "hubaib", "zaid", "saad", "umer"];
users = [];
for (var i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("\nHello admin, would you like to see a status report?\n");
    }
    else {
        console.log("Hello ".concat(users[i], ", thank you for logging in again."));
    }
}
if (users.length === 0) {
    console.log("\nWe need to find some users!");
}
