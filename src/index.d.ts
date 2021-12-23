type ItemType = 'left' | 'right'

type EventType = 'add' | 'del'

interface Item {
  id: number
  answer: string
  clues: string[]
}

interface Event {
  type: EventType
  at: typeof Date
  item: Item
}

interface CountedItem {
  count: number
  item: Item
}
