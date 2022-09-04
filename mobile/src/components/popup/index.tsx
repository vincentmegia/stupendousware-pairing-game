import React, {memo, ReactNode, useEffect, useState} from 'react'
import {Modal, View} from 'react-native'
import styles from './styles'

interface PopupProps {
  visible: boolean
  child: ReactNode
}
const Popup = ({visible, child}: PopupProps) => {
  const [isVisible, setVisible] = useState(visible)

  useEffect(() => {
    setVisible(visible)
  }, [visible])

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setVisible(false)
        }}
        style={{flex: 1}}>
        {child}
      </Modal>
    </View>
  )
}

export default memo(Popup)
