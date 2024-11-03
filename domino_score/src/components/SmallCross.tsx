import React from 'react';
import { View } from 'react-native';
import { layout } from '../styles/layout';

interface SmallCrossProps {
    circles: 1 | 2 | 3 | 4;
}

export function SmallCross({ circles }: SmallCrossProps) {
    return (
        <View style={layout.smallCrossContainer}>
            <View style={layout.smallVertical} />
            <View style={layout.smallHorizontal} />
            
            {circles >= 1 && <View style={[layout.smallCircle, layout.smallTopCircle]} />}
            {circles >= 2 && <View style={[layout.smallCircle, layout.smallRightCircle]} />}
            {circles >= 3 && <View style={[layout.smallCircle, layout.smallBottomCircle]} />}
            {circles >= 4 && <View style={[layout.smallCircle, layout.smallLeftCircle]} />}
        </View>
    );
} 