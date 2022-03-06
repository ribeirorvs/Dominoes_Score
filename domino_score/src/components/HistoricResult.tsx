import React from 'react';
import { View, Text, Image } from 'react-native';
import { layout } from '../styles/layout';
import { points } from '../assets/images'


export interface HitoricResultProps {
    winnerPlayer1: string,
    winnerPlayer2: string,
    looserPlayer1: string,
    looserPlayer2: string,
    looserScore: number,
    key?: number
}

export function HistoricResult({
    winnerPlayer1,
    winnerPlayer2,
    looserPlayer1,
    looserPlayer2,
    looserScore,
    ...rest
}: HitoricResultProps) {
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
                    <Image source={points[5]} />
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
                    {
                        looserScore == 1 ? <Text style={layout.lambreta}>Lambreta</Text> : <Image source={points[looserScore]} />
                    }
                </View>
            </View>
        </View>
    )
}