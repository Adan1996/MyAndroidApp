import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import cart from '../../assets/icons/cart.png';

const Cart = (props) => {
    return (
        <View>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}/>
                <Text style={styles.notif}>{props.quantity}</Text>
            </View>
            <Text style={styles.text}>keranjang belanja anda</Text>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    iconCart: {
        width: 50,
        height: 50
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#4398D1',
        width: 93,
        height: 93,
        borderRadius: 92 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    text: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 8
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6fcf97',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
})
