import React from "react"
import { SafeAreaView, Text } from "react-native"
import { Splash } from "stupendousware-core"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const App = () => {
   return (
      <>
         <NavigationContainer>
            <Stack.Navigator initialRouteName="Account">
               <Stack.Screen name="Splash" component={Splash} />
            </Stack.Navigator>
         </NavigationContainer>
      </>
   )
}

export default App
