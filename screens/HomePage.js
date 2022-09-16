import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <View>
        <Navbar/>
      <Text>HomePage</Text>

      <TextInput
        style={styles.text_input}
        placeholder='username'
      />
      <TextInput
        style={styles.text_input}
        placeholder='password'
      />
      <Button title='Login'/>
    </View>
  )
}

const styles = StyleSheet.create({
    text_input:{
        borderWidth:1,
        borderColor:'blue',
        marginBottom:10
    }
})