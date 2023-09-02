import { expect } from 'chai'

/**
 * Exercise 1
 * 
 * Given the data, you must define the interface "User" and use it accordingly
 */

interface User {
  name: string;
  age: number;
  occupation: string;
}

const users: User[] = [
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
]

const exerciseOne = (users: User[]): string[] => {
  return users.map((user: User) => `${user.name} - ${user.age}`);
}

// console.log(exerciseOne(users));

/**
 * Exercise 2
 * 
 * After you've defined the User type, you must define the new type "Person"
 * in the persons array and fix the function.
 */

type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
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
]

const exerciseTwo = (persons: Person[]): string[] => {
  return persons.map((person: Person) => `${person.name} - ${person.age}`)
}

// console.log(exerciseTwo(persons));

/**
 * Exercise 3
 * 
 * Define the two following functions to define if a person is a user or an admin.
 */
const isAdmin = (person: Person): boolean => {
  // TODO: insert logic here
  return 'role' in person;
}

const isUser = (person: Person): boolean => {
  // TODO: insert logic here
  return 'occupation' in person;
}

// console.log(isAdmin(persons[1]));
// console.log(isUser(persons[1]));