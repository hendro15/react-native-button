import React, { Component } from 'react';
import Style from './Style';
import {
    View, Text, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';

export default class Main extends Component {
    _onPressButton() {
        Alert.alert('Yout tapped the button!');
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!');
    }

    render() {
        return (
            <View style={Style.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="blue">
                    <View style={Style.button}>
                        <Text style={Style.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={Style.button}>
                        <Text style={Style.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback onPress={this._onPressButton}>
                    <View style={Style.button}>
                        <Text style={Style.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback onPress={this._onPressButton}>
                    <View style={Style.button}>
                        <Text style={Style.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="red">
                    <View style={Style.button}>
                        <Text style={Style.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}