import React, { Component } from 'react';
import {Image, Text, TextInput, View} from 'react-native';

// functional component
const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0984e3'}}/>
      <Text>Syahdan</Text>
      <Masyhuri />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
}

const Masyhuri = () => {
  return <Text>Masyhuri</Text>;
}

const Photo = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}}/>;
}

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
        <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={{width: 100, height: 100, borderRadius: 50}}/>
        <Text style={{color: 'blue'}}>Ini hewan</Text>
      </View>
    );
  }
}

export default App;