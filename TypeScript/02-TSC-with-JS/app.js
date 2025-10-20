// Generic Type...!
var user_1 = {
    name: "ahmed",
    age: 33,
    random: "giftBox",
    extra: ["HTML", "CSS"]
};
console.log(user_1);
var user_2 = {
    name: "raza",
    age: 23,
    random: ['surprise'],
    extra: false
};
console.log(user_2);
var company_1 = {
    name: "abc",
    multiLocation: true,
    department: {
        mobileDep: true,
        sap: false
    }
};
console.log(company_1);
// enum for use define data set for constent values..!
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var role = Role.Admin;
if (role == Role.Admin) {
    console.log("Admin");
}
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
var move = Direction.UP;
console.log(move); // "UP"
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday"; // 4
})(Days || (Days = {}));
console.log(Days.Wednesday); // 2
// void - for create testing function not return anything
function testing(name) {
    console.log(name);
}
testing("fuzail");
