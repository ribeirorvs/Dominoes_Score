import React, { useState } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    FlatList,
    ScrollView
} from 'react-native';
import { layout } from '../styles/layout';
import { HistoricResult, HitoricResultProps } from '../components/HistoricResult';


export function Home() {
    const backgroundImage = require('../img/background.png');
    const score = require('../img/cross.png');
    const point = require('../img/point.png');
    const [historicID, setHistoricID] = useState(0);
    const [play1, setPlay1] = useState<string>('Player_1');
    const [play2, setPlay2] = useState<string>('Player_2');
    const [play3, setPlay3] = useState<string>('Player_3');
    const [play4, setPlay4] = useState<string>('Player_4');
    const [pair1Score, setPair1Score] = useState(1);
    const [pair2Score, setPair2Score] = useState(1);
    const [pair1Point1, setPair1Point1] = useState(0);
    const [pair1Point2, setPair1Point2] = useState(0);
    const [pair1Point3, setPair1Point3] = useState(0);
    const [pair1Point4, setPair1Point4] = useState(0);
    const [pair2Point1, setPair2Point1] = useState(0);
    const [pair2Point2, setPair2Point2] = useState(0);
    const [pair2Point3, setPair2Point3] = useState(0);
    const [pair2Point4, setPair2Point4] = useState(0);
    const [historic, setHistoric] = useState<HitoricResultProps[]>([]);

    function handlePlayers1Name(name: string) {
        setPlay1(name)
    }

    function handlePlayers2Name(name: string) {
        setPlay2(name)
    }

    function handlePlayers3Name(name: string) {
        setPlay3(name)
    }

    function handlePlayers4Name(name: string) {
        setPlay4(name)
    }

    function createNewHistoric(winner: string, looser: string, looserPoints: number) {
        const winnerPlayers = winner.split(" ");
        const looserPlayers = looser.split(" ");

        setHistoricID(historicID + 1);
        setHistoric([
            {
                winnerPlayer1: winnerPlayers[0],
                winnerPlayer2: winnerPlayers[1],
                looserPlayer1: looserPlayers[0],
                looserPlayer2: looserPlayers[1],
                looserScore: looserPoints,
                key: historicID
            },
            ...historic
        ]);
        //historic.push(newHistoric);
    }

    function clearPoints() {
        const winner = pair1Score > pair2Score ? play1 + ' ' + play2 : play3 + ' ' + play4;
        const looser = pair1Score < pair2Score ? play1 + ' ' + play2 : play3 + ' ' + play4;
        const looserScore = pair1Score > pair2Score ? pair2Score : pair1Score;
        createNewHistoric(winner, looser, looserScore);
        console.log(historic);
        setPair1Score(1);
        setPair2Score(1);
        setPair1Point1(0);
        setPair1Point2(0);
        setPair1Point3(0);
        setPair1Point4(0);
        setPair2Point1(0);
        setPair2Point2(0);
        setPair2Point3(0);
        setPair2Point4(0);
    }

    function gainPointPair1() {
        if (pair1Score <= 4) {
            setPair1Score(pair1Score + 1)
            switch (pair1Score) {
                case 1:
                    setPair1Point1(1);
                    break;
                case 2:
                    setPair1Point2(1);
                    break;
                case 3:
                    setPair1Point3(1);
                    break;
                default:
                    setPair1Point4(1);
                    Alert.alert(
                        "",
                        "Vitoria!!!",
                        [
                            {
                                text: 'Ok',
                                onPress: clearPoints
                            }
                        ]
                    );
            }
        }
    }

    function losePointPair1() {
        if (pair1Score > 1) {
            setPair1Score(pair1Score - 1)
            switch (pair1Score) {
                case 2:
                    setPair1Point1(0);
                    break;
                case 3:
                    setPair1Point2(0);
                    break;
                case 4:
                    setPair1Point3(0);
                    break;
            }
        }
    }

    function gainPointPair2() {
        if (pair2Score <= 4) {
            setPair2Score(pair2Score + 1)
            switch (pair2Score) {
                case 1:
                    setPair2Point1(1);
                    break;
                case 2:
                    setPair2Point2(1);
                    break;
                case 3:
                    setPair2Point3(1);
                    break;
                default:
                    setPair2Point4(1);
                    Alert.alert(
                        "",
                        "Vitoria!!!",
                        [
                            {
                                text: 'Ok',
                                onPress: clearPoints
                            }
                        ]
                    );
            }
        }
    }

    function losePointPair2() {
        if (pair2Score > 1) {
            setPair2Score(pair2Score - 1)
            switch (pair2Score) {
                case 2:
                    setPair2Point1(0);
                    break;
                case 3:
                    setPair2Point2(0);
                    break;
                case 4:
                    setPair2Point3(0);
                    break;
            }
        }
    }

    return (
        <View style={layout.container}>
            <ImageBackground source={backgroundImage} style={layout.backgroundImage}>
                <View style={layout.content}>
                    <View style={layout.players}>
                        <View style={layout.pair}>
                            <TouchableOpacity
                                activeOpacity={0.1}
                            >
                                <TextInput
                                    style={layout.playerName}
                                    value={play1}
                                    onChangeText={handlePlayers1Name}
                                />
                            </TouchableOpacity>
                            <View style={layout.verticalLine}></View>
                            <TouchableOpacity
                                activeOpacity={0.1}
                            >
                                <TextInput
                                    style={layout.playerName}
                                    value={play2}
                                    onChangeText={handlePlayers2Name}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={layout.pair}>
                            <TouchableOpacity
                                activeOpacity={0.1}
                            >
                                <TextInput
                                    style={layout.playerName}
                                    value={play3}
                                    onChangeText={handlePlayers3Name}
                                />
                            </TouchableOpacity>
                            <View style={layout.verticalLine}></View>
                            <TouchableOpacity
                                activeOpacity={0.1}
                            >
                                <TextInput
                                    style={layout.playerName}
                                    value={play4}
                                    onChangeText={handlePlayers4Name}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={layout.scores}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    onPress={gainPointPair1}
                                >
                                    <Text style={layout.plusScore}>+1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    onPress={losePointPair1}
                                >
                                    <Text style={layout.minusScore}> -1</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View>
                                    <View style={layout.point1} >
                                        <Image source={point} style={{ opacity: pair1Point1 }} />
                                    </View>
                                    <View style={layout.point2} >
                                        <Image source={point} style={{ opacity: pair1Point2 }} />
                                    </View>
                                    <View style={layout.point4} >
                                        <Image source={point} style={{ opacity: pair1Point4 }} />
                                    </View>
                                    <View style={layout.point3} >
                                        <Image source={point} style={{ opacity: pair1Point3 }} />
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
                                    onPress={gainPointPair2}
                                >
                                    <Text style={layout.plusScore}>+1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    onPress={losePointPair2}
                                >
                                    <Text style={layout.minusScore}> -1</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={layout.point1} >
                                    <Image source={point} style={{ opacity: pair2Point1 }} />
                                </View>
                                <View style={layout.point2} >
                                    <Image source={point} style={{ opacity: pair2Point2 }} />
                                </View>
                                <View style={layout.point4} >
                                    <Image source={point} style={{ opacity: pair2Point4 }} />
                                </View>
                                <View style={layout.point3} >
                                    <Image source={point} style={{ opacity: pair2Point3 }} />
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
                    <ScrollView>
                        <FlatList
                            data={historic}
                            renderItem={({ item }) => (
                                <HistoricResult
                                    winnerPlayer1={item.winnerPlayer1}
                                    winnerPlayer2={item.winnerPlayer2}
                                    looserPlayer1={item.looserPlayer1}
                                    looserPlayer2={item.looserPlayer2}
                                    looserScore={item.looserScore}
                                />
                            )}
                        />
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
}