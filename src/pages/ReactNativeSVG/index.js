import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UndrawPostOnline from '../../assets/images/undraw_Post_online_re_1b82.svg';

const ReactNativeSVG = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi menggunakan SVG di React Native</Text>
            <UndrawPostOnline width={300} height={200} />
        </View>
    )
}

export default ReactNativeSVG;

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'}
})
