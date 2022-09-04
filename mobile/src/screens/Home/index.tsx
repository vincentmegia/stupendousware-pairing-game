import React, {useCallback, useEffect, useRef, useState} from 'react'
import {Pressable, SafeAreaView, Text, View} from 'react-native'
import CardList from '@components/card-list'
import Debug from '@components/debug'
import {CardModel} from '@models/types'
import {getCards, randomizer} from './extension'
import styles from './styles'

const Home = () => {
  const cardsRef = useRef<Array<CardModel[]>>(getCards(randomizer()))
  const [pointerEvents, setPointerEvents] = useState<'none' | 'auto'>('auto')
  const [restart, setRestart] = useState(0)
  // for efficiency, since pointerEvents force re-render after every turn
  // will just use useRef for counting
  const totalMovesRef = useRef(0)

  const onRestart = useCallback(() => {
    cardsRef.current = getCards(randomizer())
    totalMovesRef.current = 0
    setRestart(new Date().getMilliseconds())
  }, [])

  const onScoreUpdate = useCallback(() => {
    totalMovesRef.current = totalMovesRef.current + 1
  }, [totalMovesRef])

  return (
    <SafeAreaView key={restart} style={styles.container}>
      <View style={styles.scoreBoard}>
        <View style={styles.restartContainer}>
          <Pressable onPress={onRestart}>
            <Text style={styles.button}>Restart</Text>
          </Pressable>
          <Text style={styles.text}>Total moves: {totalMovesRef.current}</Text>
        </View>
        <Text style={styles.textSmall}>
          The random numbers in the screen are re-render indicators. Application
          is optimized it doesnt re-render on card flip.
        </Text>
      </View>
      <View style={styles.container} pointerEvents={pointerEvents}>
        <CardList
          cards={cardsRef.current}
          onDisableClicks={() => {
            setPointerEvents('none')
            setTimeout(() => {
              setPointerEvents('auto')
            }, 1000)
          }}
          onScoreUpdate={onScoreUpdate}
        />
        <View style={styles.debug}>
          <Debug />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
