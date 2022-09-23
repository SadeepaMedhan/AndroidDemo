import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <View>
        <Navbar/>
      <Text style={styles.title}>HomePage</Text>

      
    </View>
  )
}
