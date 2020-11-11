import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const CallAPIVanila = () => {
    const [dataUser, setDataUser] = useState({
        first_name: '',
        last_name: '',
        avatar: '',
        email: ''
    })

    const [dataJob, setDataJob] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        // Call API dengan method GET
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        // mengirim data dengan method POST
        // const dataForAPI = {
        //     email: "eve.holt@reqres.in",
        //     password: "pistol"
        // }

        // console.log('data-object', dataForAPI);
        // console.log('data-string', JSON.stringify(dataForAPI));

        // fetch('https://reqres.in/api/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log('post-response',json)
        //     })
    }, []);
    const getData = () => {
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => {
                setDataUser(json.data)
            })
    }

    const postData = () => {
        const dataForAPI = {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }

        // console.log(dataForAPI);

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
            .then(response => response.json())
            .then(json => {
                setDataJob(json)
                // console.log(json)
            })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Implementasi fake API menggunakan Vanila Javascript</Text>
            <Button title="GET Data" onPress={getData}/>
            <Text>Response GET Data</Text>
            <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>
            <View style={styles.line} />
            <Button title="POST Data" onPress={postData} />
            <Text>{dataJob.email}</Text>
            <Text>{dataJob.password}</Text>
        </View>
    )
}

export default CallAPIVanila;

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 100}
})
