import React from 'react'
import {Animated} from 'react-native'
import styles from './styles'

interface DebugProps {
  environment?: 'dev' | 'test'
}

const Debug = ({environment}: DebugProps) => {
  return (
    <Animated.Text style={styles.text}>
      {!environment ? 0 : new Date().getMilliseconds()}
    </Animated.Text>
  )
}

export default Debug
