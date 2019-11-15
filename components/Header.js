import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity
} from 'react-native'
import { FontAwesome, Entypo, Feather} from '@expo/vector-icons';
import logo from '../assets/logo.png';

const Header = ({toggleOpen, navigation}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={toggleOpen}>
                <Entypo name="menu" size={30} color='#fff'/>
            </TouchableOpacity>
            <Image 
                source={logo}
                style={{width: 120, height: 30}}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Feather name="search" size={30} color='#fff' />
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
    }
})
export default Header
