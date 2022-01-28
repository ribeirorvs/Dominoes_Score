import React, { useState } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { layout } from '../styles/layout';
import { HistoricResult } from '../components/HistoricResult';

const backgroundImage = require('../img/background.png');
const score = require('../img/cross.png');
const point = require('../img/point.png');
export function Home() {
    return (
        <View style={layout.container}>
            <ImageBackground source={backgroundImage} style={layout.backgroundImage}>
                <View style={layout.content}>
                    <View style={layout.players}>
                        <View style={layout.pair}>
                            <Text>Player 1</Text>
                            <View style={layout.verticalLine}></View>
                            <Text>Player 2</Text>
                        </View>
                        <View style={layout.pair}>
                            <Text>Player 3</Text>
                            <View style={layout.verticalLine}></View>
                            <Text>Player 4</Text>
                        </View>
                    </View>
                    <View style={layout.scores}>
                        <View style={layout.scorePair}>
                            <Text style={layout.plusScore}>+1</Text>
                            <Text style={layout.minusScore}>-1</Text>
                            <View style={layout.point1} >
                                <Image source={point} />
                            </View>
                            <View style={layout.point2} >
                                <Image source={point} />
                            </View>
                            <View style={layout.point4} >
                                <Image source={point} />
                            </View>
                            <View style={layout.point3} >
                                <Image source={point} />
                            </View>
                            <View>
                                <Image source={score} />
                            </View>
                        </View>
                        <View style={layout.scorePair}>
                            <Text style={layout.plusScore}>+1</Text>
                            <Text style={layout.minusScore}>-1</Text>
                            <View style={layout.point1} >
                                <Image source={point} />
                            </View>
                            <View style={layout.point2} >
                                <Image source={point} />
                            </View>
                            <View style={layout.point4} >
                                <Image source={point} />
                            </View>
                            <View style={layout.point3} >
                                <Image source={point} />
                            </View>
                            <View>
                                <Image source={score} />
                            </View>
                        </View>
                    </View>
                    <View style={layout.historicView}>
                        <Text style={layout.historic}>
                            Histórico
                        </Text>
                    </View>
                    <View>
                        <HistoricResult
                            winnerPlayer1='Player 1'
                            winnerPlayer2='Player 2'
                            looserPlayer1='Player 3'
                            looserPlayer2='Player 4'
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}