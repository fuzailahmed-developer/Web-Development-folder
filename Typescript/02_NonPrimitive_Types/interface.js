var u1 = {
    id: '123',
    name: 'ali raza',
    email: 'ali@gmail.com',
    password: 'ali123',
    greet: function () {
        console.log('hello World');
    }
};
var products = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" }
];
var add = function (a, b) {
    return a + b;
};
add(1, 5);
var e1 = {
    name: 'uzair',
    salary: 25000
};
var a1 = {
    name: 'umer',
};
var a2 = {
    age: 18
};
var a3 = {
    name: 'usman',
    age: 18
};
console.log(a3);
var admin = {
    name: "Ali",
    role: "Super Admin"
};
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
var selectedDirection = Direction.Down;
console.log(selectedDirection);
