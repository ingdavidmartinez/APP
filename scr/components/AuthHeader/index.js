import React from "react";
import {Image, Pressable, Text, View } from "react-native";
import {styles} from './styles'

const AuthHeader = ({title,onBackPress}) => {
 
    return(
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/FLECHA.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
      
}

export default AuthHeader;