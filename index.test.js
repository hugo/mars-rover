const {Squad, Rover} = require('.')

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

describe('Rover', () => {
  test('#explore', () => {
    expect(new Rover('12N', 'LMLMLMLMM').explore().position).toBe('13N')
    expect(new Rover('33E', 'MMRMMRMRRM').explore().position).toBe('51E')
  })

  test('#turnLeft', () => {
    expect(new Rover('00N').turnLeft().position).toBe('00W')
    expect(new Rover('00E').turnLeft().position).toBe('00N')
    expect(new Rover('00S').turnLeft().position).toBe('00E')
    expect(new Rover('00W').turnLeft().position).toBe('00S')
  })

  test('#turnRight', () => {
    expect(new Rover('00N').turnRight().position).toBe('00E')
    expect(new Rover('00E').turnRight().position).toBe('00S')
    expect(new Rover('00S').turnRight().position).toBe('00W')
    expect(new Rover('00W').turnRight().position).toBe('00N')
  })

  test('#move', () => {
    expect(new Rover('11N').move().position).toBe('12N')
    expect(new Rover('11E').move().position).toBe('21E')
    expect(new Rover('11S').move().position).toBe('10S')
    expect(new Rover('11W').move().position).toBe('01W')
  })
})

test('explore', () => {
  const actual = new Squad(input).explore().roverPositions

  expect(actual).toBe(expected)
})
