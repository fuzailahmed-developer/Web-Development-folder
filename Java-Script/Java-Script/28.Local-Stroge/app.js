let student = {
  name: "Ali",
  age: 20,
  city: "Lahore"
};
// console.log(student, typeof student);

//! noted 
// 1. for store data in local storage convert data in stringify 
let dataConvert = JSON.stringify(student)
localStorage.setItem("studentData",dataConvert);

// set id 

let setId = new Date().getTime();
localStorage.setItem("uId",JSON.stringify(setId))

function removeUser() {
    if (localStorage.getItem("uId") != null) {
        // localStorage.removeItem("uId")
        localStorage.clear( )
    } else {
        console.log("Data Not Available");
        
    }
}