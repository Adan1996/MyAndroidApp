import React from 'react';
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
    </View>
  );
}

const Masyhuri = () => {
  return <Text>Masyhuri</Text>;
}

const Photo = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}}/>;
}

export default App;