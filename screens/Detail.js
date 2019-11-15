import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, Dimensions, TouchableOpacity, FlatList, ScrollView, Share} from 'react-native'
import datas from './data.js';
import { FontAwesome, Entypo, Feather, MaterialIcons, AntDesign} from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }
    onPress = (index) => {
        this.setState({
        index: index
        })
    }
    static navigationOptions = (navigationData) => {
        const key = navigationData.navigation.getParam('key');
        const data = datas.find(data => data.key === 5); // thay 5 bang key
        return {
            headerTitle: data.name,
            headerStyle: {
                backgroundColor: '#181818',
                borderBottomWidth: 0,
            },
            headerTintColor: '#fff'
        };
    }

    onShare = async () => {
        try {
        const result = await Share.share({
            message: 'Share Films to someone?',
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
            // shared with activity type of result.activityType
            } else {
            // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
        } catch (error) {
        alert(error.message);
        }
    };

    render() {
        const {index} = this.state;
        const {navigation} = this.props;
        const key = navigation.getParam('key');
        const data = datas.find(data => data.key === 5); // thay 5 bang key
        const {image, name} = data;
        const {thumbnail, description, cast, numOfEpisodes, year, season, creator} = data.details;
        return (
            <View style={{flex: 1, backgroundColor: '#181818'}}>
                <ScrollView>
                    <View style={{position: 'relative'}}>
                        <Image 
                            source={{uri: thumbnail}}
                            style={styles.thumbnail}
                        />
                        <TouchableOpacity  style={styles.play} onPress={() => navigation.navigate('VideoPlayerView')}>
                            <AntDesign name="playcircleo" size={60} color='#FFF'/>
                        </TouchableOpacity>
                    </View>
                    <LinearGradient colors={['transparent', '#181818', '#181818']}
                         style={styles.name}
                    >
                        <Text style={{fontSize: 35, letterSpacing: 2, color: '#fff'}}>{name}</Text>
                    </LinearGradient>
                    <View style={{marginHorizontal: 20, marginTop: 5}}>
                        <View style={styles.info}>
                            <Text style={styles.text}>{year}</Text>
                            <Text style={styles.text}>{numOfEpisodes}</Text>
                            <Text style={styles.text}>{season} season</Text>
                        </View>
                        <Text style={[styles.text, {marginTop: 10}]}>{description}</Text>
                        <Text style={[styles.text, {marginTop: 10}]}>Cast: {cast}</Text>
                        <Text style={styles.text}>Creator: {creator}</Text>
                    </View>
                    <View style={styles.connect}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Entypo name="check" size={30} color='grey' />
                            <Text style={styles.text}>My Lists</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20}}>
                            <TouchableOpacity onPress={this.onShare}>
                                <Entypo name="share" size={30} color='grey' />
                            </TouchableOpacity>
                            <Text style={styles.text}>Share</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                        <TouchableOpacity onPress={() => this.onPress(1)} style={[styles.click, index===1 ? {borderTopColor: 'red'} : null]}>
                            <Text style={[styles.text, {textAlign: 'center'}]}>EPISODES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onPress(2)} style={[styles.click, index===2 ? {borderTopColor: 'red'} : null]}>
                            <Text style={[styles.text, {textAlign: 'center'}]}>TRAILERS & MORE</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        index===1 ? (
                            <FlatList
                                style={{marginHorizontal: 10}}
                                data = {data.details.episodes}
                                keyExtractor = {episode => String(episode.id)}
                                renderItem = {({item}) => {
                                    return (
                                        <View style={styles.episode}>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{marginRight: 15, position: 'relative'}}>
                                                    <Image 
                                                    source={{uri: item.image.medium}}
                                                    style={{width: width/2, height: 100}}
                                                    />
                                                    <AntDesign name="playcircleo" size={30} color='#FFF' style={styles.playSmall}/>
                                                </View>
                                                <Text style={styles.textEpisode}>{item.number}. {item.name}</Text>
                                            </View>
                                            <View> 
                                                <Text style={styles.textEpisode}>{item.summary}</Text>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        )
                        : null
                    }
                </ScrollView>
            </View>
        )
    }
}
// Detail.navigationOptions = navigationData => {
//     console.log(navigationData)
//   const key = navigationData.navigation.getParam('key');
//   const data = datas.find(data => data.key === key);
//   return {
//     headerTitle: data.name
//   };
// };
const styles = StyleSheet.create({
    thumbnail: {
        width,
        height: 250
    },
    play: {
        position: 'absolute',
        left: width/2 - 30,
        top: 100,
        opacity: 0.7
    },
    name: {
        marginTop: -25,
        position: 'relative',
        marginHorizontal: 10,
    },
    info: {
        flexDirection: 'row',
        width: width/2,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        color: 'grey'
    },
    connect: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 15,
        alignItems: 'center',
    },
    click: {
        width: width/2,
        paddingVertical: 10,
        borderTopColor: '#181818',
        borderTopWidth: 2,
    },
    playSmall: {
        position: 'absolute',
        opacity: 0.7,
        top: 35,
        left: width/4 - 15
    },
    episode: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginVertical: 5
    },
    textEpisode: {
        fontSize: 15,
        color: 'grey'
    }
})
export default Detail;