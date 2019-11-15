import React, {Component} from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity,
Dimensions } from 'react-native'
import { FontAwesome, Entypo, Feather,MaterialIcons} from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');

export default class Menu extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#191919'}}>
                <View style={styles.header}>
                    <Image 
                        source= {{uri: "https://i.pravatar.cc/300"}}
                        style={{width: 60, height: 60, borderRadius: 30}}
                    />
                    <Text style={styles.user}>Quyet.xd</Text>
                    <FontAwesome name="exchange" size={32} color='#fff'/>
                </View>
                <View style={styles.header}>
                    <View style={styles.download}>
                        <FontAwesome name="download" size={32} color='#fff'/>
                        <Text style={[styles.user, {marginLeft: 20}]}>My Downloads</Text>
                    </View>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={32} color='#fff'/>
                    </View>
                </View>
                <View style={styles.header}>
                    <View style={styles.download}>
                        <Entypo name="check" size={32} color='#fff'/>
                        <Text style={[styles.user, {marginLeft: 20}]}>My Lists</Text>
                    </View>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={32} color='#fff'/>
                    </View>
                </View>
                <Text style={styles.text}>Home</Text>
                <Text style={styles.text}>Available for download</Text>
                <Text style={styles.text}>Netflix Orginals</Text>
                <Text style={styles.text}>Tv Shows</Text>
                <Text style={styles.text}>Action & Advance</Text>
                <Text style={styles.text}>Children & Family Movies</Text>
                <Text style={styles.text}>Comedies</Text>
                <Text style={styles.text}>Documentaries</Text>
            </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    user: {
        fontSize: 16,
        color: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    },
    download: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
    }
})
