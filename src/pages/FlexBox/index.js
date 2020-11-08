import React, { Component } from 'react';
import {Image, Text, View} from 'react-native';

class FlexBox extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View backgroundColor='#ee5253' style={{width: 50, height: 50}}/>
                    <View backgroundColor='#feca57' style={{width: 50, height: 50}}/>
                    <View backgroundColor='#1dd1a1' style={{width: 50, height: 50}}/>
                    <View backgroundColor='#5f27cd' style={{width: 50, height: 50}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Image source={require('../../assets/images/anonymouse.jpeg')} style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}} />
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Anonymouse</Text>
                        <Text>100 ribu subscriber</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default FlexBox;
