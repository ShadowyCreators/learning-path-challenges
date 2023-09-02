"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// console.log(exerciseTwo(persons));
/**
 * Exercise 3
 *
 * Define the two following functions to define if a person is a user or an admin.
 */
var isAdmin = function (person) {
    // TODO: insert logic here
    return 'role' in person;
};
var isUser = function (person) {
    // TODO: insert logic here
    return 'occupation' in person;
};
// console.log(isAdmin(persons[1]));
// console.log(isUser(persons[1]));
/**
 * Exercise 4
 *
 * Define the following library to manipulate objects.
 * We are missing some annotations, help us!
 */
var ObjectManipulator = /** @class */ (function () {
    function ObjectManipulator(obj) {
        this.obj = obj;
    }
    ObjectManipulator.prototype.set = function (key, value) {
        var _a;
        return new ObjectManipulator(__assign(__assign({}, this.obj), (_a = {}, _a[key] = value, _a)));
    };
    ObjectManipulator.prototype.get = function (key) {
        return this.obj[key];
    };
    ObjectManipulator.prototype.delete = function (key) {
        var newObj = __assign({}, this.obj);
        delete newObj[key];
        return new ObjectManipulator(newObj);
    };
    ObjectManipulator.prototype.getObject = function () {
        return this.obj;
    };
    return ObjectManipulator;
}());
var manipulator = new ObjectManipulator({ name: 'Mattia', age: 28 });
console.log(manipulator.getObject());
console.log(manipulator.get('name'));
console.log(manipulator.set('occupation', 'developer'));
console.log(manipulator.delete('name'));
console.log(manipulator);
/*

describe('[Frontend] Level 1', () => {
  it('[Exercise 1] Should return a list of strings with `name - age` for each user.', () => {
      expect(exerciseOne(users)).eql(['Max Mustermann - 25', 'Kate Müller - 23'])
  })
  it('[Exercise 2] Should return a list of strings with `name - age` for each person.', () => {
    expect(exerciseTwo(persons)).eql(['Max Mustermann - 25', 'Jane Doe - 32', 'Kate Müller - 23', 'Bruce Willis - 64'])
  })
  it('[Exercise 3a] Should return only the list of users', () => {
    expect(exerciseTwo(persons.filter(isUser))).eql(['Max Mustermann - 25', 'Kate Müller - 23'])
  })
  it('[Exercise 3b] Should return only the list of admins', () => {
    expect(exerciseTwo(persons.filter(isAdmin))).eql(['Jane Doe - 32', 'Bruce Willis - 64'])
  })
  it('[Exercise 4] The ObjectManipulator class should work.', () => {
    let objManipulator = new ObjectManipulator({ exercise: 4 })
    expect(objManipulator.get('exercise')).eq(4)
    objManipulator = objManipulator.set('test', true)
    expect(objManipulator.get('exercise')).eq(4)
    expect(objManipulator.get('test')).eq(true)
    objManipulator = objManipulator.delete('test')
    expect(objManipulator.get('test')).eq(undefined)
  })
})

*/ 
