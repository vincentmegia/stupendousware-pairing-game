import React, {useCallback, useRef, useState} from 'react'
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

  const onRestart = useCallback(() => {
    cardsRef.current = getCards(randomizer())
    setRestart(new Date().getMilliseconds())
  }, [])

  return (
    <SafeAreaView key={restart} style={styles.container}>
      <View style={styles.scoreBoard}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable onPress={onRestart}>
            <Text style={styles.button}>Restart</Text>
          </Pressable>
          <Text style={styles.text}>Score: 0</Text>
        </View>

        <View style={{marginTop: 16}}>
          <Text style={styles.textSmall}>
            The random numbers in the screen are re-render indicators.
            Application is optimized it doesnt re-render on card flip.
          </Text>
        </View>
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
        />
        <View style={styles.debug}>
          <Debug />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
