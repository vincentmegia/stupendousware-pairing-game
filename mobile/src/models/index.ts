import {CardModel} from './types'

export function createCard(id: number, value: string): CardModel {
  return {
    id,
    value,
    matched: false,
    selected: false,
    reset: false,
  }
}

export const findCard = (cards: Array<CardModel[]>, id: number): CardModel => {
  for (const columns of cards) {
    for (const column of columns) {
      if (column.id === id) {
        return column
      }
    }
  }
  return createCard(-1, '-1')
}

export const updateCard = (cards: Array<CardModel[]>, card: CardModel) => {
  for (let row = 0; row < cards.length; row++) {
    for (let column = 0; column < cards[row].length; column++) {
      if (cards[row][column].id === card.id) {
        cards[row][column] = card
        break
      }
    }
  }
}
