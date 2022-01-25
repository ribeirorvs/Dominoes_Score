import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { layout } from '../styles/layout';

export function Home() {
    return (
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
    );
}