// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["hubaib", "ali", "saif", "zaid", "ahmed"];
let new_users = ["HUBAIB", "saad", "khalid", "rayyan", "Ahmed"];

new_users.forEach(new_users=>{
    let lower_new_users = new_users.toLowerCase();

let usernametaken = current_users.some(current_users=>
    current_users.toLowerCase() === lower_new_users);
    if(usernametaken){
        console.log(`${new_users} the username has already been used please choose another one`);
    }
    else{
        console.log(`${new_users} the username available`);
        current_users.push(new_users);
    }
});

console.log(current_users);
