import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const Story = (props) => {
    return (
        <View style={{alignItems: 'center', marginRight: 20}} >
            <Image source={{uri: props.gambar}} style={{width: 50, height: 50, borderRadius: 50/2}} />
            <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row', padding: 20}} >
                    <Story gambar='https://scontent-sin6-1.cdninstagram.com/v/t51.12442-15/e35/c0.419.1081.1081a/s150x150/67713201_148685932890935_2929470062587816648_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=MaiZGil8GpgAX_IhJrG&tp=16&oh=5d5e06ae34bc5bd11d69851197df0d6d&oe=5FAA000D' judul='Promo Tokopedia'/>
                    <Story gambar='https://scontent-sin6-1.cdninstagram.com/v/t51.12442-15/e35/c0.419.1081.1081a/s150x150/65259604_448934479261051_7397412354091807985_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=107&_nc_ohc=JjJnuRypYGcAX-nw6s8&tp=16&oh=ef15f3632330e1fe40ed3abb47b4fad2&oe=5FAA0EE5' judul='Glove Kancing'/>
                    <Story gambar='https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.419.1081.1081a/s150x150/60467794_460086374565464_4244005046594059117_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=TivVHTx-t2MAX-53C1e&tp=16&oh=33466504ee9b059e247c64c27521babb&oe=5FAA30A3' judul='Legging Thermal' />
                    <Story gambar='https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/43664636_2132223470170558_494171932001931586_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110&_nc_ohc=Hv0TqUiYuYkAX_9iNw5&tp=16&oh=0ac057a664660c5ff70c2cd1128e325e&oe=5FAA2CDE' judul='Longjohn' />
                    <Story  gambar='https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/43817547_1252744524894557_7867680958507069648_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=euW_qtli8IAAX9AdO1o&tp=16&oh=116eb40d0ab880bd818196ebb8ca308e&oe=5FAA6447' judul='Coat' />
                    <Story gambar='https://scontent-sin6-1.cdninstagram.com/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/43816541_245390986115860_7951854280336944451_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=104&_nc_ohc=DjqhAcLO1xYAX-kmewJ&tp=16&oh=1c71c61f7270a6d2bfbeff0f6bcf865f&oe=5FAA2004' judul='Kupluk + Syal' />
                </View>
            </ScrollView>
        </View>
    );
};

export default PropsDinamis;
