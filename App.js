import { View, Text } from 'react-native'
import React from 'react'
import HomePage from './screens/HomePage'
import Login from './screens/Login'
import {NativeBaseProvider} from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
      <Login/>
    </NativeBaseProvider>
  )
}