import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import AndroidSecurity from '../../assets/images/Android-Securitry.jpg';

const Product = (props) => {
    return (
        <View>
            <View
                style={styles.wrapping}>
                <Image source={AndroidSecurity} style={styles.imageProduct}/>
                <Text style={styles.textProduct}>
                    Android Apps For All
                </Text>
                <Text style={styles.textPrice}>
                    Rp. 12.000
                </Text>
                <Text style={styles.textAddress}>
                    Kukusan Depok
                </Text>
                <TouchableOpacity onPress={props.onButtonPress}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>
                        Beli
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
    wrapping: {
        padding: 12,
        backgroundColor: '#f2f2f2',
        width: 212,
        borderRadius: 8,
    },
    imageProduct: {width: 188, height: 107, borderRadius: 8},
    textProduct: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
    textPrice: {fontSize: 12, fontWeight: 'bold', color: '#F2994A'},
    textAddress: {fontSize: 12, fontWeight: '300', marginTop: 12},
    button: {backgroundColor: '#6FCF97', borderRadius: 25, marginTop: 20},
    textButton: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    }
})
