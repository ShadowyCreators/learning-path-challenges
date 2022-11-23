import { expect } from 'chai'

export const exercise = (a, b) => {
  return a + b
}

it('Should add the two numbers together', () => {
  expect(exercise(1, 2)).eq(3)
})
