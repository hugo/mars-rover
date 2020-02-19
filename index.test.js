const {} = require('.')

const input = `
55
12N
LMLMLMLMM
33E
MMRMMRMRRM
`.trim()

const expected = `
13N
51E
`.trim()

test('explore', () => {
  const actual = input

  expect(actual).toBe(expected)
})
