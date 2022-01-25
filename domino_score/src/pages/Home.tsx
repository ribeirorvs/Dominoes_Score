import React, { useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { layout } from '../styles/layout';

const backgroundImage = require('../img/background.png');
export function Home() {
    return (
        <View style={layout.container}>
            <ImageBackground source={backgroundImage} style={layout.backgroundImage}>
                <View style={layout.container}>
                    <View>
                        <View>
                            <Text>Player 1</Text>
                            <View></View>
                            <Text>Player 2</Text>
                        </View>
                        <View>
                            <Text>Player 1</Text>
                            <View></View>
                            <Text>Player 2</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}