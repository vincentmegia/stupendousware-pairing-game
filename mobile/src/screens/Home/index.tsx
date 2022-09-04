import React, {useCallback, useRef, useState} from 'react'
import {Button, Pressable, SafeAreaView, Text, View} from 'react-native'
import CardList from '@components/card-list'
import Debug from '@components/debug'
import {CardModel} from '@models/types'
import {getCards, randomizer} from './extension'
import styles from './styles'
import Popup from '@components/popup'

const Home = () => {
  const cardsRef = useRef<Array<CardModel[]>>(getCards(randomizer()))
  const [pointerEvents, setPointerEvents] = useState<'none' | 'auto'>('auto')
  const [restart, setRestart] = useState(0)
  const [popup, setPopup] = useState(false)
  const [finished, setFinished] = useState(false)
  // for efficiency, since pointerEvents force re-render after every turn
  // will just use useRef for counting
  const totalMovesRef = useRef(0)
  const completedRef = useRef(false)

  const onRestart = useCallback(() => {
    setPopup(true)
  }, [])

  const onScoreUpdate = useCallback(
    (completed: boolean) => {
      if (completed) {
        setFinished(true)
        completedRef.current = true
        return
      }
      totalMovesRef.current = totalMovesRef.current + 1
    },
    [totalMovesRef],
  )

  const onConfirm = (confirm: boolean) => {
    setFinished(false)
    setPopup(false)
    if (!confirm) return
    completedRef.current = false
    cardsRef.current = getCards(randomizer())
    totalMovesRef.current = 0
    setRestart(new Date().getMilliseconds())
  }

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

      <Popup
        visible={popup}
        child={
          <View style={styles.modal}>
            <Text style={styles.text}>
              {completedRef.current
                ? 'Do you wish to start new?'
                : 'Are you sure to restart in middle of game?'}
            </Text>
            <View style={styles.buttonGroup}>
              <Button title="No" onPress={() => onConfirm(false)} />
              <Button title="Yes" onPress={() => onConfirm(true)} />
            </View>
          </View>
        }
      />
      <Popup
        visible={finished}
        child={
          <View style={styles.modal}>
            <Text style={styles.text}>
              Congratulations! you've completed the game. Do you wish to play
              again?
            </Text>
            <View style={styles.buttonGroup}>
              <Button title="No" onPress={() => onConfirm(false)} />
              <Button title="Yes" onPress={() => onConfirm(true)} />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Home
