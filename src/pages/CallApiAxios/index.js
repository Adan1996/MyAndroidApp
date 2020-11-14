import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const CallAPIAxios = () => {
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

    const getData = () => {
        Axios.get('https://reqres.in/api/users/4')
        .then(result => {
            setDataUser(result.data.data)
        })
        .catch(err => console.log(err))
    }

    const postData = () => {
        const dataForAPI = {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }

        Axios.post('https://reqres.in/api/users', dataForAPI)
        .then(res => {
            setDataJob(res.data)
        })
        .catch(err => console.log(err))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Implementasi fake API menggunakan Axios</Text>
            <Button title="GET Data" onPress={getData}/>
            <Text>Response GET Data</Text>
            {dataUser.avatar.length > 0 && (
                <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
            )}
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>
            <View style={styles.line} />
            <Button title="POST Data" onPress={postData} />
            <Text>{dataJob.email}</Text>
            <Text>{dataJob.password}</Text>
        </View>
    )
}

export default CallAPIAxios;

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 100}
})
