import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CallAPIVanila = () => {
    useEffect(() => {
        // Call API dengan method GET
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))

        const dataForAPI = {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }

        console.log('data-object', dataForAPI);
        console.log('data-string', JSON.stringify(dataForAPI));

        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
            .then(response => response.json())
            .then(json => {
                console.log('post-response',json)
            })
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Implementasi fake API menggunakan Vanila Javascript</Text>
        </View>
    )
}

export default CallAPIVanila;

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'}
})
