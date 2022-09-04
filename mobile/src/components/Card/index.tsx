import React, {memo, useCallback, useEffect, useRef, useState} from 'react'
import {Animated, Pressable} from 'react-native'
import {CardModel} from '@models/types'
import Debug from '../debug'
import styles from './styles'

interface CardProps {
  card: CardModel
  onSelected: (card: CardModel) => void
}
const Card = (props: CardProps) => {
  const {card, onSelected} = props
  const flipAnimation = useRef(new Animated.Value(0)).current
  const flipRef = useRef(false)
  const [selected, setSelected] = useState(card.selected)

  useEffect(() => {
    if (card.reset) {
      flipToBack()
      setSelected(card.selected)
      card.reset = false
    }
  }, [card.reset])

  /**
   * Flip to front animation
   */
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  }

  /**
   * Flip to back animation
   */
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  }

  const flipToFront = useCallback(() => {
    flipRef.current = true
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  const flipToBack = useCallback(() => {
    if (card.matched) return
    flipRef.current = false
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  const onPress = useCallback(() => {
    if (flipRef.current) {
      flipToBack()
    } else {
      flipToFront()
    }
    setSelected(!selected)
    onSelected({...card, selected: !card.selected})
  }, [])

  return (
    <>
      <Pressable style={styles.container} onPress={onPress} disabled={selected}>
        <Animated.View style={{...styles.cardFront, ...flipToBackStyle}}>
          <Animated.Text style={{...styles.textFront, ...flipToBackStyle}}>
            {card.value}
          </Animated.Text>
          <Debug />
        </Animated.View>
        <Animated.View style={{...styles.cardBack, ...flipToFrontStyle}}>
          <Animated.Text style={{...styles.textBack, ...flipToFrontStyle}}>
            {card.value}
          </Animated.Text>
          <Debug />
        </Animated.View>
      </Pressable>
    </>
  )
}

export default memo(Card)
