import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList} from 'react-native'
import Header from '../components/Header.js';
import Slider from '../components/Slider.js';
import List from '../components/List.js';
import Menu from '../components/Menu.js';
import SideMenu from 'react-native-side-menu';

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <SideMenu
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.setState({isOpen: isOpen})}
                menu={<Menu />}
            >
                <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
                    <ScrollView>
                        <Header toggleOpen={this.toggleOpen} navigation={this.props.navigation}/>
                        <Slider />
                        <List navigation={this.props.navigation}/>
                    </ScrollView>
                </SafeAreaView>
            </SideMenu>
        )
    }
}

const styles = StyleSheet.create({})
