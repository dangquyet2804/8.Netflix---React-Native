import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Alert } from 'react-native'
import Logo from '../components/Logo.js';
import CustomButton from '../components/CustomButton.js';
import { FontAwesome } from '@expo/vector-icons';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import logo from '../assets/1.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0), // Animated opcity cho nut dang nhap
            position: new Animated.Value(0), // Animated opcity cho nut dang nhap
            isLoading: false,
            isLogin: false
        }
    }
    componentDidMount() {
        Animated.parallel([this.opacityAnimated(), this.positionAnimated()]).start();
    }
    opacityAnimated = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200,
            delay: 100
        }).start() // gan start => opacity
    }
    positionAnimated = () => {
        Animated.timing(this.state.position, {
            toValue: 1,
            duration: 300,
            // useNativeDriver: true
        }).start() // gan start => position
    }
    onPressGoogle = () => {
        console.log('Google')
        this.logInWithGoogle()
    }
    onPressFacebook = () => {
        console.log('Facebook')
        this.logInWithFacebook()
    }
    logInWithFacebook = async () =>  {
        try {
            const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('547257085836104', {
            permissions: ['public_profile'],
            });
            if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            // console.log(token)
            this.props.navigation.navigate('Main')
            } else {
            // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    logInWithGoogle = async () =>  {
        const config = {
            iosClientId: '489811360014-1ukcgfsunbvf3dei5g5g8rutsc3jton4.apps.googleusercontent.com',
            androidClientId: '489811360014-25sbgu93blavhflhh799u8baccu5v3b1.apps.googleusercontent.com'
            };
        try {
            const { type, accessToken } = await Google.logInAsync(config);

            if (type === 'success') {
            /* Log-Out */
            await Google.logOutAsync({ accessToken, ...config });
            /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
            Alert.alert('Logged in!')
            // console.log(accessToken)
            this.props.navigation.navigate('Main')
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    render() {
        const {opacity} = this.state; // khai bao opacity
        const logoTranslate = this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0], // di chuyen tu 150 ve 0
            });
        return (
            <View style={styles.screens}>
                <Animated.View style={{flex: 1, transform: [{translateY: logoTranslate}]}}>
                    <Logo logo={logo} />
                </Animated.View>
                <Animated.View style={{flex: 1, opacity: opacity}}> 
                    <CustomButton title="Continue with Google" Icon={<FontAwesome name="google-plus-square" size={25}/>} color="#1089ff" onPress={this.onPressGoogle}/>
                    <CustomButton title="Continue with Facebook" Icon={<FontAwesome name="facebook-square" size={25}/>} color="#505bda"  onPress={this.onPressFacebook}/>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})