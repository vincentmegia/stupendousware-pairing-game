import React, {memo, useCallback, useRef, useState} from 'react'
import {View} from 'react-native'
import {findCard, updateCard} from '@models/index'
import {CardModel} from '@models/types'
import Card from '../card'
import styles from './styles'

interface CardListProps {
  cards: Array<CardModel[]>
  onDisableClicks: () => void
  onScoreUpdate: (completed: boolean) => void
}

const CardList = ({
  cards: cardList,
  onDisableClicks,
  onScoreUpdate,
}: CardListProps) => {
  const selectedItemsRef = useRef<CardModel[]>([])
  const [cards, setCards] = useState(cardList)
  const completedRef = useRef(0)

  const onSelected = useCallback((card: CardModel) => {
    if (!selectedItemsRef.current) return
    selectedItemsRef.current.push(card)

    if (selectedItemsRef.current.length <= 1) return

    // inform parent to disable all clicks
    onDisableClicks()
    // match criteria
    const previousCard = {...findCard(cards, selectedItemsRef?.current[0]?.id)}
    const currentCard = {...findCard(cards, selectedItemsRef?.current[1]?.id)}

    if (previousCard?.value !== currentCard?.value) {
      // not match
      setTimeout(() => {
        previousCard.reset = true
        currentCard.reset = true
        previousCard.selected = false
        currentCard.selected = false
        updateCard(cards, previousCard)
        updateCard(cards, currentCard)
        setCards([...cards])

        selectedItemsRef.current = []
      }, 1000)
      onScoreUpdate(false)
      return
    }

    // matched
    currentCard.matched = true
    previousCard.matched = true
    completedRef.current = completedRef.current + 2
    selectedItemsRef.current = []
    console.log('completedRef count: ', completedRef.current)
    onScoreUpdate(completedRef.current === 12)
  }, [])

  return (
    <>
      {cards.map((cardItem, index) => {
        return (
          <View key={`rowid-${index}`} style={styles.row}>
            {cardItem.map(card => {
              return (
                <Card
                  key={`colid-${card.id}`}
                  card={card}
                  onSelected={onSelected}
                />
              )
            })}
          </View>
        )
      })}
    </>
  )
}

export default memo(CardList)
