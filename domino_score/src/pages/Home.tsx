import React, { useState } from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Alert,
    FlatList
} from 'react-native';
import { layout } from '../styles/layout';
import { HistoricResult, HistoricResultProps } from '../components/HistoricResult';
import { CrossWithButtons } from '../components/CrossWithButtons';

interface Player {
    name: string;
}

export interface Pair {
    players: [Player, Player];
    score: number;
}

interface GameState {
    pairs: [Pair, Pair];
}

interface GameImages {
    backgroundImage: any;
}

interface AlertButton {
    text: string;
    onPress: () => void;
}

export function Home() {
    const images: GameImages = {
        backgroundImage: require('../img/background.png')
    }

    const [gameState, setGameState] = useState<GameState>({
        pairs: [
            {
                players: [
                    { name: 'Jogador 1' },
                    { name: 'Jogador 2' }
                ],
                score: 0,
            },
            {
                players: [
                    { name: 'Jogador 3' },
                    { name: 'Jogador 4' }
                ],
                score: 0
            }
        ]
    });

    const [historicID, setHistoricID] = useState(0);
    const [historic, setHistoric] = useState<HistoricResultProps[]>([]);
    const [crossReset, setCrossReset] = useState(false);

    function handlePlayersName(name: string, playerIndex: number, pairIndex: number) {
        setGameState(prevState => ({
            ...prevState,
            pairs: prevState.pairs.map((pair, idx) =>
                idx === pairIndex
                    ? {
                        ...pair,
                        players: pair.players.map((player, pidx) =>
                            pidx === playerIndex ? { ...player, name } : player
                        ) as [Player, Player]
                    }
                    : pair
            ) as [Pair, Pair]
        }));
    }

    function clearPoints() {
        const winnerPairIndex = gameState.pairs[0].score > gameState.pairs[1].score ? 0 : 1;
        const loserPairIndex = 1 - winnerPairIndex;

        const winnerPair = {
            players: gameState.pairs[winnerPairIndex].players.map(player => ({ ...player })) as [Player, Player],
            score: gameState.pairs[winnerPairIndex].score
        };
        
        const loserPair = {
            players: gameState.pairs[loserPairIndex].players.map(player => ({ ...player })) as [Player, Player],
            score: gameState.pairs[loserPairIndex].score
        };

        setHistoricID(historicID + 1);
        setHistoric([
            {
                winnerPair: winnerPair,
                loserPair: loserPair,
                key: historicID
            },
            ...historic
        ]);

        setCrossReset(prev => !prev);

        setGameState(prevState => {
            const newState = {...prevState};
            newState.pairs.forEach(pair => {
                pair.score = 0;
            });
            return newState;
        });
    }

    function gainPoint(pairIndex: number) {
        setGameState(prevState => {
            const newState = {...prevState};
            const pair = newState.pairs[pairIndex];
            if (pair.score < 4) {
                pair.score += 1;
                if (pair.score >= 4) {
                    const okButton: AlertButton = {
                        text: 'Ok',
                        onPress: clearPoints
                    };
                    Alert.alert(
                        "",
                        "Vitoria!!!",
                        [okButton]
                    );
                }
            }
            return newState;
        });
    }

    function losePoint(pairIndex: number) {
        setGameState(prevState => {
            const newState = {...prevState};
            const pair = newState.pairs[pairIndex];
            if (pair.score > 0) {
                pair.score -= 1;
            }
            return newState;
        });
    }

    return (
        <View style={layout.container}>
            <ImageBackground source={images.backgroundImage} style={layout.backgroundImage}>
                <View style={layout.content}>
                    <View style={layout.players}>
                        <View style={layout.pair}>
                            <View style={layout.playerInputContainer}>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    style={layout.playerTouchableInput}
                                >
                                    <TextInput
                                        style={layout.playerName}
                                        value={gameState.pairs[0].players[0].name}
                                        onChangeText={(name) => handlePlayersName(name, 0, 0)}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={layout.verticalLine}></View>
                            <View style={layout.playerInputContainer}>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    style={layout.playerTouchableInput}
                                >
                                    <TextInput
                                        style={layout.playerName}
                                        value={gameState.pairs[0].players[1].name}
                                        onChangeText={(name) => handlePlayersName(name, 1, 0)}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={layout.pair}>
                            <View style={layout.playerInputContainer}>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    style={layout.playerTouchableInput}
                                >
                                    <TextInput
                                        style={layout.playerName}
                                        value={gameState.pairs[1].players[0].name}
                                        onChangeText={(name) => handlePlayersName(name, 0, 1)}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={layout.verticalLine}></View>
                            <View style={layout.playerInputContainer}>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    style={layout.playerTouchableInput}
                                >
                                    <TextInput
                                        style={layout.playerName}
                                        value={gameState.pairs[1].players[1].name}
                                        onChangeText={(name) => handlePlayersName(name, 1, 1)}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={layout.scores}>
                        <CrossWithButtons
                            onCirclesChange={(isAdding) => isAdding ? gainPoint(0) : losePoint(0)}
                            reset={crossReset}
                        />
                        <CrossWithButtons
                            onCirclesChange={(isAdding) => isAdding ? gainPoint(1) : losePoint(1)}
                            reset={crossReset}
                        />
                    </View>
                    <View style={layout.historicView}>
                        <Text style={layout.historic}>
                            Histórico
                        </Text>
                    </View>
                    <View style={layout.historicTitle}>
                        <Text style={layout.winnerTitle}>Winners</Text>
                        <Text style={layout.loserTitle}>losers</Text>
                    </View>
                    <FlatList
                        data={historic}
                        renderItem={({ item }) => (
                            <HistoricResult
                                winnerPair={item.winnerPair}
                                loserPair={item.loserPair}
                            />
                        )}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}