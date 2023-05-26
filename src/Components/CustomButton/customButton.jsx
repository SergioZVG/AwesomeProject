import React from "react";
import {View, Pressable, Text} from "react-native";
import {styles} from './style.jsx'

const CustomButton = props => {
    const {onPressButton, type} = props;
return (

    <View style={styles.container}>
        <Pressable onPress={onPressButton}>
            <Text style={styles.text}>
                Ver mas
            </Text>
        </Pressable>
    </View>
)

}

export default CustomButton;