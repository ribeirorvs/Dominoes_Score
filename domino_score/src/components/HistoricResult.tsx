import React from 'react';
import { View, Text, Image } from 'react-native';
import { layout } from '../styles/layout';


interface HitoricResultProps {
    winnerPlayer1: string,
    winnerPlayer2: string,
    looserPlayer1: string,
    looserPlayer2: string,
    looserScore?: string
}

export function HistoricResult({
    winnerPlayer1,
    winnerPlayer2,
    looserPlayer1,
    looserPlayer2,
    looserScore,
    ...rest
}: HitoricResultProps) {
    const result1 = require('../img/result1.png');
    const result2 = require('../img/result2.png');
    const result3 = require('../img/result3.png');
    const result4 = require('../img/result4.png');
    return (
        <View style={layout.resultHistoric}>
            <View style={layout.pairWinner}>
                <View style={layout.winner}>
                    <Text style={layout.hisotricTitle}>Dupla</Text>
                    <Text>{winnerPlayer1}</Text>
                    <Text>{winnerPlayer2}</Text>
                </View>
                <View style={layout.verticalLine}></View>
                <View style={layout.winner}>
                    <Text style={layout.hisotricTitle}>Pontuação</Text>
                    <Image source={result4} />
                </View>
            </View>
            <View style={layout.pairWinner}>
                <View style={layout.winner}>
                    <Text style={layout.hisotricTitle}>Dupla</Text>
                    <Text>{looserPlayer1}</Text>
                    <Text>{looserPlayer2}</Text>
                </View>
                <View style={layout.verticalLine}></View>
                <View style={layout.winner}>
                    <Text style={layout.hisotricTitle}>Pontuação</Text>
                    <Text>Lambreta</Text>
                </View>
            </View>
        </View>
    )
}