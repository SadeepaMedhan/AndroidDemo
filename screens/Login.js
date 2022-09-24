import { StyleSheet } from 'react-native'
import { Heading, useToast, Button, VStack, Input, Stack } from "native-base";
import React from 'react'



export default function Login() {
    const toast = useToast();

    return (
        <VStack h="100%" w="80%" m="10" space={4} alignItems="center" justifyContent="flex-start">
            <Heading mb="10" size="lg">Welcome</Heading>
            <Input mb="5" variant="rounded" placeholder="User Name" />
            <Input mb="5" variant="rounded" placeholder="Password" />
            <Button mt="10" w="100%" borderRadius="50" size="md" variant="solid"
            onPress={() => toast.show({
                title: "Login Unsuccessfull",
                placement: "bottom"
            })}>
                LOGIN
            </Button>

        </VStack>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: 'white'
    },
    text_input: {
        width: '60%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        margin: 40
    },
    btn_text: {

    },
    btn: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
        margin: 50
    }
})






