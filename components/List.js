import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import lists from '../screens/data.js'
const lists2 = [
    {
        key: 1,
        name: 'The Walking Dead',
        image: "https://source.unsplash.com/random/500*200"
    },
    {
        key: 2,
        name: 'The Happy House',
        image: "https://source.unsplash.com/random/500*350"
    },
    {
        key: 3,
        name: 'The Monster',
        image: "https://source.unsplash.com/random/500*650"
    },
    {
        key: 4,
        name: 'The Dead',
        image: "https://source.unsplash.com/random/500*420"
    },
    {
        key: 5,
        name: 'The House',
        image: "https://source.unsplash.com/random/500*330"
    },
    {
        key: 6,
        name: 'Sunshine',
        image: "https://source.unsplash.com/random/500*530"
    },
]
export default class List extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text style={styles.title}>My List</Text>
                <FlatList
                    style={{marginLeft: 10}}
                    horizontal
                    data={lists}
                    keyExtractor={image => String(image.key)}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Detail', {key: item.key})}>
                                <Image source={{uri: item.image}} style={styles.images}/>
                            </TouchableOpacity>
                        )
                    }}
                />
                <Text style={styles.title}>Top Picks For You</Text>
                <FlatList
                    style={{marginLeft: 10}}
                    horizontal
                    data={lists2}
                    keyExtractor={image => String(image.key)}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <Image source={{uri: item.image}} style={styles.images}/>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    images: {
        width: 150,
        height: 200,
        marginRight: 10,
    },
    title: {
        fontSize: 17,
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

