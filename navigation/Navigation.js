import React from 'react';
import { View, Text } from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home.js';
import Search from '../screens/Search.js';
import Detail from '../screens/Detail.js';
import Splash from '../screens/Splash.js';
import Login from '../screens/Login.js';
import VideoPlayerView from '../screens/VideoPlayerView.js';

const Main = createStackNavigator({
  Home: Home,
  Search: Search,
  Detail: Detail,
  VideoPlayerView: VideoPlayerView
})

const Navigation = createSwitchNavigator({
    Splash: Splash,
    Login: Login,
    Main: Main
})
export default createAppContainer(Navigation);