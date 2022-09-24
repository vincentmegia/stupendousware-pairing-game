import React, {createRef} from 'react'

import {
  NavigationContainer,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Splash} from 'stupendousware-core'
import Home from '@screens/home'
import UserAgreement from '../../screens/user-agreement'
import {StackNavigationProp} from '@react-navigation/stack'

export type StackParamList = {
  Splash: undefined
  Home: undefined
  UserAgreement: undefined
}
const Stack = createNativeStackNavigator<StackParamList>()

export type StackNavigation = StackNavigationProp<StackParamList>

const RootNavigation = () => {
  const navigationRef =
    createRef<NavigationContainerRef<ReactNavigation.RootParamList>>()

  const onComplete = () => {
    navigationRef?.current?.dispatch(StackActions.push('UserAgreement'))
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Splash"
            children={() => <Splash onComplete={onComplete} />}
          />
          <Stack.Screen name="UserAgreement" component={UserAgreement} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
