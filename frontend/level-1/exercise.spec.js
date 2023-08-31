"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
var exerciseOne = function (users) {
    return users.map(function (user) { return "".concat(user.name, " - ").concat(user.age); });
};
console.log(exerciseOne(users));
var persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
var exerciseTwo = function (persons) {
    return persons.map(function (person) { return "".concat(person.name, " - ").concat(person.age); });
};
console.log(exerciseTwo(persons));
