import React, { useState } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { layout } from '../styles/layout';
import { HistoricResult } from '../components/HistoricResult';

export function Home() {
    const backgroundImage = require('../img/background.png');
    const score = require('../img/cross.png');
    const point = require('../img/point.png');
    const [play1, setPlay1] = useState<string>('Player 1');
    const [play2, setPlay2] = useState<string>('Player 2');
    const [play3, setPlay3] = useState<string>('Player 3');
    const [play4, setPlay4] = useState<string>('Player 4');
    const [pair1Score, setPair1Score] = useState<string>();
    const [pair2Score, setPair2Score] = useState<string>();
    return (
        <View style={layout.container}>
            <ImageBackground source={backgroundImage} style={layout.backgroundImage}>
                <View style={layout.content}>
                    <View style={layout.players}>
                        <View style={layout.pair}>
                            <TouchableOpacity
                                activeOpacity={0.1}
                                onPress={() => console.log('test')}
                            >
                                <TextInput style={layout.playerName}>{play1}</TextInput>
                            </TouchableOpacity>
                            <View style={layout.verticalLine}></View>
                            <TouchableOpacity
                                activeOpacity={0.1}
                            >
                                <TextInput style={layout.playerName}>{play2}</TextInput>
                            </TouchableOpacity>
                        </View>
                        <View style={layout.pair}>
                            <TouchableOpacity
                                activeOpacity={0.1}
                            >
                                <TextInput style={layout.playerName}>{play3}</TextInput>
                            </TouchableOpacity>
                            <View style={layout.verticalLine}></View>
                            <TouchableOpacity
                                activeOpacity={0.1}
                            >
                                <TextInput style={layout.playerName}>{play4}</TextInput>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={layout.scores}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                >
                                    <Text style={layout.plusScore}>+1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    onPress={() => console.log('test-1')}
                                >
                                    <Text style={layout.minusScore}> -1</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View>
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
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                >
                                    <Text style={layout.plusScore}>+1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                >
                                    <Text style={layout.minusScore}> -1</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
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
                    </View>
                    <View style={layout.historicView}>
                        <Text style={layout.historic}>
                            Histórico
                        </Text>
                    </View>
                    <View>
                        <HistoricResult
                            winnerPlayer1={play1}
                            winnerPlayer2={play2}
                            looserPlayer1={play3}
                            looserPlayer2={play4}
                            looserScore={pair1Score}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}