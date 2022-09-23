import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <TextInput
                style={styles.text_input}
                placeholder='Username'
            />
            <TextInput
                style={styles.text_input}
                placeholder='Password'
            />

            <TouchableOpacity style={styles.btn} >
                <Text style={styles.btn_text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        margin: 10
    },
    text_input: {
        width:'60%', 
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        margin: 40
    },
    btn_text:{
           
    },
    btn: {
       width:'60%', 
       height:50,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor:'green',
       borderRadius: 10,
       margin: 50
    }
})