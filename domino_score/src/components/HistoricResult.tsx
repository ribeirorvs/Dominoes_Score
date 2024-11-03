import React from 'react';
import { View, Text } from 'react-native';
import { layout } from '../styles/layout';
import { Pair } from '../pages/Home';
import { SmallCross } from './SmallCross';

export interface HistoricResultProps {
    winnerPair: Pair;
    loserPair: Pair;
    key?: number;
}

export function HistoricResult({
    winnerPair,
    loserPair
}: HistoricResultProps) {
    return (
        <View style={layout.resultHistoric}>
            <View style={layout.pair}>
                <View style={layout.winner}>
                    <Text style={layout.hisotricTitle}>Dupla</Text>
                    <Text>{winnerPair.players[0].name}</Text>
                    <Text>{winnerPair.players[1].name}</Text>
                </View>
                <View style={layout.verticalLine}></View>
                <View style={layout.winner}>
                    <Text style={layout.hisotricTitle}>Pontuação</Text>
                    <SmallCross circles={4} />
                </View>
            </View>
            <View style={layout.pair}>
                <View style={layout.winner}>
                    <Text style={layout.hisotricTitle}>Dupla</Text>
                    <Text>{loserPair.players[0].name}</Text>
                    <Text>{loserPair.players[1].name}</Text>
                </View>
                <View style={layout.verticalLine}></View>
                <View style={layout.winner}>
                    <Text style={layout.hisotricTitle}>Pontuação</Text>
                    {
                        loserPair.score === 0 ? 
                            <Text style={layout.lambreta}>Lambreta</Text> : 
                            <SmallCross circles={loserPair.score as 1 | 2 | 3} />
                    }
                </View>
            </View>
        </View>
    );
}