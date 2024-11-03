import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    content: {
        flex: 1
    },
    players: {
        marginTop: 85,
        paddingHorizontal: 20,
        width: '100%',
        height: 85,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playerName: {
        textAlign: 'center',
        fontSize: 14,
        flexShrink: 1,
        flexGrow: 1,
        flexWrap: 'wrap'
    },
    pair: {
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#000000',
        minWidth: 160,
        height: 77,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
        maxWidth: '45%'
    },
    verticalLine: {
        borderWidth: 1,
        borderColor: '#000000',
        height: '90%'
    },
    scores: {
        marginTop: 43,
        paddingHorizontal: 40,
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    historicTitle: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    winnerTitle: {
        color: '#00ff00',
        fontSize: 20
    },
    loserTitle: {
        color: '#ff0000',
        fontSize: 20
    },
    plusScore: {
        color: '#00ff00',
        fontSize: 20,
        paddingTop: 15,
    },
    minusScore: {
        color: '#ff0000',
        fontSize: 20,
        paddingTop: 15,
    },
    historicView: {
        marginTop: 40,
        alignItems: 'center'
    },
    historic: {
        backgroundColor: '#000000',
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 30,
        width: '65%',
        textAlign: 'center'
    },
    resultHistoric: {
        marginTop: 15,
        paddingHorizontal: 20,
        width: '100%',
        height: 85,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    winner: {
        width: 80,
        alignItems: 'center'
    },
    hisotricTitle: {
        fontWeight: 'bold',
        marginBottom: 3
    },
    lambreta: {
        color: '#ff0000',
        fontSize: 17
    },
    playerInputContainer: {
        flex: 1,
        maxWidth: '45%'
    },
    playerTouchableInput: {
        width: '100%'
    },
    gameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    buttonContainer: {
        flexDirection: 'column',
        gap: 10,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        borderColor: '#00FF00',
    },
    removeButton: {
        borderColor: '#FF0000',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButtonText: {
        color: '#00FF00',
    },
    removeButtonText: {
        color: '#FF0000',
    },
    crossContainer: {
        width: 90,
        height: 90,
        position: 'relative',
    },
    vertical: {
        position: 'absolute',
        width: 5,
        height: 90,
        backgroundColor: 'white',
        left: 42.5,
    },
    horizontal: {
        position: 'absolute',
        width: 90,
        height: 5,
        backgroundColor: 'white',
        top: 42.5,
    },
    circle: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    topCircle: {
        top: -10,
        left: 35,
    },
    rightCircle: {
        top: 35,
        right: -10,
    },
    bottomCircle: {
        bottom: -10,
        left: 35,
    },
    leftCircle: {
        top: 35,
        left: -10,
    },
    smallCrossContainer: {
        width: 36,
        height: 36,
        position: 'relative',
    },
    smallVertical: {
        position: 'absolute',
        width: 2,
        height: 36,
        backgroundColor: 'black',
        left: 17,
    },
    smallHorizontal: {
        position: 'absolute',
        width: 36,
        height: 2,
        backgroundColor: 'black',
        top: 17,
    },
    smallCircle: {
        position: 'absolute',
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'black',
    },
    smallTopCircle: {
        top: -4,
        left: 14,
    },
    smallRightCircle: {
        top: 14,
        right: -4,
    },
    smallBottomCircle: {
        bottom: -4,
        left: 14,
    },
    smallLeftCircle: {
        left: -8,
        top: '50%',
        transform: [{ translateY: -4 }],
    },
});