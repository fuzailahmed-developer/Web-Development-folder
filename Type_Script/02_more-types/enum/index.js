var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
console.log(Direction.left);
var roles;
(function (roles) {
    roles[roles["admin"] = 0] = "admin";
    roles[roles["user"] = 1] = "user";
})(roles || (roles = {}));
console.log(roles.admin);
