/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import AndroidSecurity from './Android-Securitry.jpg';

// functional component
const App = () => {
  return <SampleReactNativeComponent />;
};

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

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0984e3'}} />
      <Text>Syahdan</Text>
      <Masyhuri />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Masyhuri = () => {
  return <Text>Masyhuri</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

// class component
class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue'}}>Ini hewan</Text>
      </View>
    );
  }
}

export default App;
