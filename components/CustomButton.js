import React from 'react'
import { View, Text, StyleSheet, Button, Dimensions, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');

const CustomButton = ({title, Icon, color, onPress}) => {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.screens, {backgroundColor: color}]}>
                <Text style={styles.icon}>
                    {Icon}
                </Text>
                <Text style={{fontSize: 17, color: '#fff'}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    screens: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: width-100,
        borderRadius: 7,
        marginBottom: 15,
    },
    icon: {
        color: '#fff',
        marginHorizontal: 20,
    }
})

export default CustomButton
