import React from "react";
import { View, Text, Image } from 'react-native';
import Swiper from "react-native-swiper";
import {styles} from './style';

const Carousel = (props) => {
    const images = [
        { id: 1, source: require('../../Images/harrow.jpg') },
        { id: 2, source: require('../../Images/octavia.jpg') },
        { id: 3, source: require('../../Images/valkyr.jpg') },
        
] 
 
return (
    <View styles={styles.container}>
        <Swiper showsButtons={true}>
            {images.map(images => (
                <View key={images.id}>
                    <Image styles={styles.image} source={images.source} />
                </View>
            ))}
        </Swiper>
     </View>
);
};

export default  Carousel;