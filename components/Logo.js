import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');
const Logo = ({logo}) => {
    return (
        <View style={styles.screens}>
            <Image 
                source={logo}
                style={{width: width/1.5, height: 150}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    screens: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Logo
