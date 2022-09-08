import React, {useContext} from 'react'
import {Animated} from 'react-native'
import {EnvironmentContext} from '../enviroment'
import styles from './styles'

const Debug = () => {
  const {environment} = useContext(EnvironmentContext)
  return (
    <Animated.Text style={styles.text}>
      {environment === 'production' ? new Date().getMilliseconds() : 0}
    </Animated.Text>
  )
}

export default Debug
