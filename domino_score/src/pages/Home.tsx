import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { layout } from '../styles/layout';

export function Home() {
    return (
        <View style={layout.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}