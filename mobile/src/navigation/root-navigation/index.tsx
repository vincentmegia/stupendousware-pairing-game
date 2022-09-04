import React, {createRef, useEffect} from 'react'

import {
  NavigationContainer,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Splash} from 'stupendousware-core'
import Home from '@screens/home'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  const navigationRef =
    createRef<NavigationContainerRef<ReactNavigation.RootParamList>>()

  const onComplete = () => {
    navigationRef?.current?.dispatch(StackActions.push('Home'))
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Splash"
            children={() => <Splash onComplete={onComplete} />}
          />

          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
