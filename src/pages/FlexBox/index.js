import React, { Component, useEffect, useState } from 'react';
import {Image, Text, View} from 'react-native';

// class FlexBox extends Component {
//     constructor(props) {
//         super(props);
//         console.log('==> constructor');
//         this.state = {
//             subscriber: 200
//         }
//     }

//     componentDidMount() {
//         console.log('==> componentDidMount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 400
//             })
//         }, 2000)
//     }

//     // proses did update ini muncul ketika ada perubahan pada state
//     componentDidUpdate() {
//         console.log('==> componentDidUpdate');
//     }

//     componentWillUnmount() {
//         console.log('==> componentWillUnmount')
//     }

//     render() {
//         console.log('==> render');
//         return (
//             <View>
//                 <View style={{flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'center', justifyContent: 'space-between'}}>
//                     <View backgroundColor='#ee5253' style={{width: 50, height: 50}}/>
//                     <View backgroundColor='#feca57' style={{width: 50, height: 50}}/>
//                     <View backgroundColor='#1dd1a1' style={{width: 50, height: 50}}/>
//                     <View backgroundColor='#5f27cd' style={{width: 50, height: 50}}/>
//                 </View>
//                 <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Playlist</Text>
//                     <Text>Komunitas</Text>
//                     <Text>Channel</Text>
//                     <Text>Tentang</Text>
//                 </View>
//                 <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//                     <Image source={require('../../assets/images/anonymouse.jpeg')} style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}} />
//                     <View>
//                         <Text style={{fontSize: 20, fontWeight: 'bold'}}>Anonymouse</Text>
//                         <Text>{this.state.subscriber} ribu subscriber</Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200);
    useEffect(() => {
        console.log('==> componenDidMount');
        // dapat disederhanakan seperti
        setTimeout(() => {
            setSubscriber(400);
        }, 2000);

        // makna return ini berfungsi jika DidUpdate dan WillUnmount
        return () => {
            console.log('==> componentDidUpdate');
        };
    }, [subscriber]); // jika hanya ingin menggunakan DidMount saja, maka parameter [] tidak perlu diisi

    // useEffect(() => {
    //     console.log('==> componenDidUpdate');
    //     setTimeout(() => {
    //         setSubscriber(400);
    //     }, 2000)
    // }, [subscriber])
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
                        <Text>{subscriber} ribu subscriber</Text>
                    </View>
                </View>
            </View>
    );
};

export default FlexBox;
