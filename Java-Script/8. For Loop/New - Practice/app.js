//! sir practice 
var flag = false;
var targetedNum = 8;
for(var i = 1; i <= 10; i++){
    if (i == targetedNum) {
        flag = true;
        break;
    } 
}
if (flag) {
    console.log("Target Number Found");
} else {
    console.log("Target Number Not Found");
}
//! My Practice 
// var latter = ["A","B","C","D","E","F","G","H","I"]
// var targetLetter = "C";
// var flag = false;
// for(var i = 0; i < latter.length; i++){
//     if (latter[i] == targetLetter) {
//         flag = true;
//         break;
//     }
//     console.log(latter[i]);
// }
// if (flag) {
//     console.log("C Found");
// } else {
//     console.log("C Not Found");
// }