import {createCard} from '@models/index'
import {CardModel} from '@models/types'

export const randomizer = (): string[] => {
  const list: string[] = []
  for (let index = 0; index < 6; index++) {
    list.push((Math.random() * 100).toFixed(0))
  }
  const cardsList = [...list, ...list]
  cardsList.sort(() => 0.5 - Math.random())
  return cardsList
}

export const getCards = (numbers: string[]): Array<CardModel[]> => {
  const list = numbers.map((number, index) => {
    return createCard(index, number)
  })
  //transform to row and cols
  const rows: Array<CardModel[]> = []
  let columns: CardModel[] = []
  list.forEach((item: CardModel, index: number) => {
    const tempIndex = ++index
    columns.push(item)
    if (tempIndex % 3 === 0) {
      rows.push(columns)
      columns = []
    }
  })
  return rows
}
