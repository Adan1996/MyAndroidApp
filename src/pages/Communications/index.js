import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communications = () => {
    const [totalProduct, setTotalProduct] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.textAlign}>Materi komunikasi antar Component</Text>
            <Cart quantity={totalProduct}/>
            <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
        </View>
    )
}

export default Communications;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    }
})
