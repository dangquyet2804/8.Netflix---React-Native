import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions } from 'react-native'
import { Video } from 'expo-av';
const { height, width } = Dimensions.get('window');
export default class VideoPlayerView extends Component {
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Video 
                    source={require('../assets/video.mp4')}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    resizeMode={Video.RESIZE_MODE_CONTAIN}
                    style={{ width, height: width/1.5 }}
                    fullscreen={true}
                    useNativeControls={true}
                    onFocus={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
