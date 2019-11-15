import React, {Component} from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper';
const { height, width } = Dimensions.get('window');

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../assets/1.jpg'),
                require('../assets/2.jpg'),
                require('../assets/3.jpg')
            ]
        }
    }
    
    render() {
        return (
            <View style={{height: 240}}>
                <Swiper
                autoplay
                autoplayTimeout={3.5}
                >
                    {
                        this.state.images.map((image, index) => {
                            return (
                                <View style={{flex: 1}} key={index}>
                                    <Image source={image} style={{width, flex: 1}}/>
                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

