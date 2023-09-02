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

/**
 * Exercise 4
 * 
 * Define the following library to manipulate objects.
 * We are missing some annotations, help us!
 */

class ObjectManipulator {
  constructor(protected obj: Record<string, any>) {}

  public set(key: string, value: any): ObjectManipulator {
    return new ObjectManipulator({...this.obj, [key]: value});
  }

  public get(key: string): any {
    return this.obj[key];
  }

  public delete(key: string): ObjectManipulator {
    const newObj = {...this.obj};
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject():Record<string, any> {
    return this.obj;
  }
}

/*
let manipulator = new ObjectManipulator({ name: 'Mattia', age: 28});
console.log(manipulator.getObject());
console.log(manipulator.get('name'));
console.log(manipulator.set('occupation', 'developer'));
console.log(manipulator.delete('name'));
console.log(manipulator);
*/ 

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