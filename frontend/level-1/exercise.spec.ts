import { expect } from 'chai'

/**
 * Exercise 1
 * 
 * Given the data, you must define the interface "User" and use it accordingly
 */

type User = unknown;

const users: unknown[] = [
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

const exerciseOne = (users: unknown[]) => {
  return users.map((user: unknown) => `${user.name} - ${user.age}`)
}

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

type Person = unknown;

const persons: User[] /* Person[] */ = [
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

const exerciseTwo = (persons: unknown[]) => {
  return persons.map((person: unknown) => `${person.name} - ${person.age}`)
}

/**
 * Exercise 3
 * 
 * Define the two following functions to define if a person is a user or an admin.
 */
const isAdmin = (person: Person): boolean => {
  // TODO: insert logic here
  return false
}

const isUser = (person: Person): boolean => {
  // TODO: insert logic here
  return false
}

/**
 * Exercise 4
 * 
 * Define the following library to manipulate objects.
 * We are missing some annotations, help us!
 */

class ObjectManipulator {
  constructor(protected obj) {}

  public set(key, value) {
    return new ObjectManipulator({...this.obj, [key]: value});
  }

  public get(key) {
    return this.obj[key];
  }

  public delete(key) {
    const newObj = {...this.obj};
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject() {
    return this.obj;
  }
}

describe('[Frontend] Level 1', () => {
  it('[Exercise 1] Should return a list of strings with `name - age` for each user.', () => {
      expect(exerciseOne(users)).eq(['Max Mustermann - 25', 'Kate Müller - 23'])
  })
  it('[Exercise 2] Should return a list of strings with `name - age` for each person.', () => {
    expect(exerciseTwo(persons)).eq(['Max Mustermann - 25', 'Jane Doe - 32', 'Kate Müller - 23', 'Bruce Willis - 64'])
  })
  it('[Exercise 3a] Should return only the list of users', () => {
    expect(exerciseTwo(persons.filter(isUser))).eq(['Max Mustermann - 25', 'Kate Müller - 23'])
  })
  it('[Exercise 3b] Should return only the list of admins', () => {
    expect(exerciseTwo(persons.filter(isAdmin))).eq(['Jane Doe - 32', 'Bruce Willis - 64'])
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
