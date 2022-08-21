import React from 'react'
import {Animated} from 'react-native'
import styles from './styles'

const Debug = () => {
  return (
    <Animated.Text style={styles.text}>
      {new Date().getMilliseconds()}
    </Animated.Text>
  )
}

export default Debug
