import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { layout } from '../styles/layout';

interface CrossWithButtonsProps {
    onCirclesChange: (isAdding: boolean) => void;
    reset: boolean;
}

export function CrossWithButtons({ onCirclesChange, reset }: CrossWithButtonsProps) {
    const [circles, setCircles] = useState<number>(0);
    
    useEffect(() => {
        setCircles(0);
        return () => {};
    }, [reset]);

    const addCircle = () => {
        if (circles < 4) {
            const newCircles = circles + 1;
            setCircles(newCircles);
            onCirclesChange(true);
        }
    };

    const removeCircle = () => {
        if (circles > 0) {
            const newCircles = circles - 1;
            setCircles(newCircles);
            onCirclesChange(false);
        }
    };

    return (
        <View style={layout.gameContainer}>
            <View style={layout.buttonContainer}>
                <TouchableOpacity style={[layout.button, layout.addButton]} onPress={addCircle}>
                    <Text style={[layout.buttonText, layout.addButtonText]}>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[layout.button, layout.removeButton]} onPress={removeCircle}>
                    <Text style={[layout.buttonText, layout.removeButtonText]}>-1</Text>
                </TouchableOpacity>
            </View>
            <View style={layout.crossContainer}>
                <View style={layout.vertical} />
                <View style={layout.horizontal} />
                
                {circles >= 1 && <View style={[layout.circle, layout.topCircle]} />}
                {circles >= 2 && <View style={[layout.circle, layout.rightCircle]} />}
                {circles >= 3 && <View style={[layout.circle, layout.bottomCircle]} />}
                {circles >= 4 && <View style={[layout.circle, layout.leftCircle]} />}
            </View>
        </View>
    );
} 