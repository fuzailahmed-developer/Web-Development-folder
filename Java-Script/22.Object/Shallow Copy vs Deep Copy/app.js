let userdata = {
    firstName : "Muhammad",
    lastName : "Amir",
    Age : 18,
    city : "Karachi"
}
console.log(userdata);

//! wrong Method 

// let copyData = userdata
// copyData.Edu = "Matric"

//! Shallow Copy Method correct way to copy object and array
 
// Noted : Sallow copy problem in nested array or objects

//? 1. 
// let copyData = {};
// Object.assign(copyData,userdata)
// copyData.postalCode = "75760"

//? 2. easy method 
// let copyData = {...userdata}
// copyData.postalCode = "75760"


//! Deep Copy -- For Nested Object and Array Copy

let person = {
  name: "Ahmed",
  age: 30,
  address: {
    city: "Karachi",
    zip: 74000
  },
  contact: {
    phone: "03123456789",
    email: "ahmed@example.com"
  }
};

let copyPerson = JSON.parse(JSON.stringify(person))
copyPerson.address.zip = 888323;