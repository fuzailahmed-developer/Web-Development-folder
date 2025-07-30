var muslimNames = [
    "Aisha",
    "Fatima",
    "Khadija",
    "Hassan",
    "Hussain",
    "Omar",
    "Ali",
    "Zainab",
    "Abdullah",
    "Maryam",
    "Abdullah"
];

//! find index number [ .indexof ]
// var findTarget = muslimNames.indexOf("Hussain");
// console.log(findTarget);
//? noted point 
// 1.Give Array value to get indexnumber 
// 2.More than 1 time value he will return first one 
// 3.Ager value array ma nahi ha tu output -1 huga

//! task 
var yourNameList = ["Amir","Fatima","Khadija"];
var friendNameList1 = ["Hassan","Hussain","Omar"];
var anotherFriendList2 = ["Ali","Zainab","Abdullah"];

var yourName = prompt("Enter Your Name");

if (yourName === yourNameList[0] || yourName === yourNameList[1] || yourName === yourNameList[2] ) {

    var friendName = prompt("Enter Your Friend Name") ;
    
    if (friendName === friendNameList1[0] || friendName === friendNameList1[1] || friendName === friendNameList1[2]) {
        
        var anotherFriend = prompt("Enter another Friend Name");

        if (anotherFriend === anotherFriendList2[0] || anotherFriend === anotherFriendList2[1] || anotherFriend === anotherFriendList2[2]) {
            console.log(
            'My name is : ' + yourName +
            '\nMy friend name is : ' + friendName +
            '\nMy another friend name is : ' + anotherFriend
            );
        } else{
            console.log("another Friend Name Not Match");
        }
    } 
    else{
        console.log("You Friend Name is Not Match");
    }
} 
else {
    console.log("You Name Not Match");
}