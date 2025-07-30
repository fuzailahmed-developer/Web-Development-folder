//? too upper case method () 
var str = "Hello World";
var strUpper = str.toUpperCase();
console.log(strUpper);

//? too lower case method () 
var str2 = "Hello World";
var strLower = str2.toLowerCase();
console.log(strLower);

var abcd = ["abcd","efg","ikl"]
for(var i = 0; i < abcd.length; i++){
    console.log(abcd[i].toUpperCase());    
}

//? slice method for extract
var extract = 'My World';
console.log(extract.length);
console.log(extract.slice(0,8));
// extract.split('').forEach((currEle,index) => {
//     console.log(currEle,index);
// });

//? charArt method find value with index number
var hiStr = 'Fuzail Ka World';
console.log(hiStr.charAt(10));
// hiStr.split("").forEach((currEle,index) => {
//     console.log(currEle,index);
// });

//? after decimal value .tofixed method
var num = 10.882288;
console.log(num.toFixed(2));
 
//? replace and replace all method 
var myName = "Muhammad Ahmed";
console.log(myName.replace("Ahmed","Fuzail"));

//? repeat sting
var repeat = "Fuzail Selat ";
console.log(repeat.repeat(5));


//? user first capitalize .slice method ma end number jis number ku deta ha wu count nahi huta.
// var user = prompt("Enter Name");
    // console.log(user.slice(0,1).toUpperCase() + user.slice(1));
    // console.log(user.charAt(0).toUpperCase() + user.slice(1));
    
//? print array first latter capitalize
var array = ['the','quick','brown','fox','jumps','over','the','lazy','dog'];
for(var i = 0; i < array.length; i++){
    var initailChar = array[i].charAt(0).toUpperCase() + array[i].slice(1); 
    console.log(initailChar);
}

