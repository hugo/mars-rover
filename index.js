class Rover {
  constructor([x, y, heading], instructions) {
    this.x = x
    this.y = y
    this.heading = heading
    this.instructions = instructions
  }

  get position() {
    return `${this.x}${this.y}${this.heading}`
  }

  explore() {
    this.instructions.split('').forEach((instruction) => {
      switch (instruction) {
        case 'L':
          this.turnLeft()
          break
        case 'R':
          this.turnRight()
          break
        case 'M':
          this.move()
          break
        default:
          throw new Error(`Unexpected instruction ${instruction}`)
      }
    })

    return this
  }

  turnLeft() {
    this.heading = {N: 'W', E: 'N', S: 'E', W: 'S'}[this.heading]

    return this
  }

  turnRight() {
    this.heading = {N: 'E', E: 'S', S: 'W', W: 'N'}[this.heading]
    return this
  }

  move() {
    switch (this.heading) {
      case 'N':
        this.y++
        break
      case 'E':
        this.x++
        break
      case 'S':
        this.y--
        break
      case 'W':
        this.x--
        break
      default:
        throw new Error(`Unexpected heading ${this.heading}`)
    }

    return this
  }
}

class Squad {
  constructor(input) {
    const [coordinates, roverInfos] = this.parse(input)
    this.coordinates = coordinates

    this.rovers = roverInfos.map((info) => new Rover(...info))
  }

  parse(input) {
    const [coordinates, ...rest] = input.split('\n')

    let roverInfos = []
    while (rest.length) {
      roverInfos.push([rest.shift(), rest.shift()])
    }

    return [coordinates, roverInfos]
  }

  explore() {
    this.rovers.forEach((rover) => {
      rover.explore()
    })

    return this
  }

  get roverPositions() {
    return this.rovers.map((rover) => rover.position).join('\n')
  }
}

module.exports = {Squad, Rover}
