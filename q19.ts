// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList = ["ahmed", "zaid", "saad", "rayyan", "arbaab", "tahir", "saif"];
console.log(`I am inviting ${guestList.length} people to dinner\n`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`${i+1}.${guestList[i]} I would like to invite you to dinner\n`);
}