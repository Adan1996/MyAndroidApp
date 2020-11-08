import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AndroidSecurity from './Android-Securitry.jpg';

const SampleReactNativeComponent = () => {
    return (
      <View>
        <Text style={styles.text}>Sample React Native Component</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#0984e3',
            borderWidth: 2,
            borderColor: '#5f27cd',
            marginTop: 20,
            marginLeft: 20,
          }}
        />
        <View
          style={{
            padding: 12,
            backgroundColor: '#f2f2f2',
            width: 212,
            borderRadius: 8,
          }}>
          <Image
            source={AndroidSecurity}
            style={{width: 188, height: 107, borderRadius: 8}}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
            Android Apps For All
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#F2994A'}}>
            Rp. 12.000
          </Text>
          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
            Kukusan Depok
          </Text>
          <View
            style={{backgroundColor: '#6FCF97', borderRadius: 25, marginTop: 20}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center',
              }}>
              Beli
            </Text>
          </View>
        </View>
      </View>
    );
  };
  
  // membuat styling terpisah
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#10ac84',
      marginLeft: 20,
      marginTop: 40,
    },
  });

  export default SampleReactNativeComponent;