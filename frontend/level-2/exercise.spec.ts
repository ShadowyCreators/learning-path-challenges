import { expect } from 'chai'
import fetch from 'node-fetch';

/**
 * Exercise 1
 * 
 * Write a regular expression that returns true if the input string has the first character uppercase, false otherwise.
 */
const exerciseOneRegexp = /^/


/**
 * Exercise 2
 * 
 * Write a regular expression that returns true if the pattern matches an e-mail address.
 * An e-mail address is composed of the following characters:
 * - uppercase and lowercase letters;
 * - digits;
 * - special characters (! # $ % & ' * + - / = ? ^ _ ` { | } ~);
 * - 'dot' character.
 */
const exerciseTwoRegexp = /^/


const testRegExp = (regex: RegExp, input: string): boolean => {
  return regex.test(input)
}

/**
 * Exercise 3
 * 
 * Complete the following function by using `fetch` and retrieving data from `https://jsonplaceholder.typicode.com/posts`.
 * The data comes in the following format:
 * [{ userId: number, id: number, title: string, body: string }].
 * The function must return a list of strings with the following format: `userId - id - title (only first word)`.
 */
const exerciseThree = async (): Promise<string[]> => {
  // implement here
  const fetchResult = fetch('')
  return []
}

describe('[Frontend] Level 2', () => {
  it('[Exercise 1] Should return true if the string has the first character uppercase, false otherwise.', () => {
    expect(testRegExp(exerciseOneRegexp, 'Exercise')).eql(true)
    expect(testRegExp(exerciseOneRegexp, 'exercise')).eql(false)
  })
  it('[Exercise 2] Should return true if the input string is an email, false otherwise.', () => {
    expect(testRegExp(exerciseTwoRegexp, 'test@email.com')).eql(true)
    expect(testRegExp(exerciseTwoRegexp, '@notanemail.com')).eql(false)
    expect(testRegExp(exerciseTwoRegexp, 'com.not@email')).eql(false)
    expect(testRegExp(exerciseTwoRegexp, 'wrong.email')).eql(false)
  })
  it('[Exercise 3] Should return a list of strings with the following format: `userId - id - title (only first word)`.', async () => {
    expect((await exerciseThree()).slice(0, 3)).eql([`1 - 1 - sunt`, `1 - 2 - qui`, `1 - 3 - ea`])
  })
})
  