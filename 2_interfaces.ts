interface Rect {
  readonly id: String
  color?: string
  size: {
    width: number
    heigth: number
  }
}

const rect1: Rect = {
  id: '5468',
  size: {
    width: 45,
    heigth: 35
  },
  color: '#ccc'
}
const rect2: Rect = {
  id: '1255',
  size: {
    width: 15,
    heigth: 12
  }
}
rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}


interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '133',
  size: {
    width: 20,
    heigth: 20
  },
  getArea(): number {
    return this.size.width * this.size.heigth
  }
}

// ====================

interface IClock {
  time: Date
  setTime(date: Date): void
}
class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

// =======================
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}
