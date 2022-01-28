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
    pair: {
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#000000',
        width: 160,
        height: 77,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        justifyContent: 'space-between',
        //backgroundColor: '#0000ff'
    },
    point1: {
        justifyContent: 'center',
        paddingLeft: 37,
        marginBottom: 23
    },
    point2: {
        paddingLeft: 75,
        marginBottom: -15
    },
    point3: {
        paddingLeft: 37,
        marginBottom: -90
    },
    point4: {
        paddingLeft: 0,
        marginBottom: 22
    },
    scorePair: {
        justifyContent: 'flex-end'
    },
    plusScore: {
        marginBottom: 25,
        marginLeft: -20,
        color: '#00ff00',
        fontSize: 20
    },
    minusScore: {
        marginBottom: -80,
        marginLeft: -20,
        color: '#ff0000',
        fontSize: 20
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
        //flexDirection: 'column',
        //borderWidth: 3,
        //borderRadius: 10,
        //borderColor: '#000000',
        width: 80,
        //height: 77,
        //paddingHorizontal: 15,
        //backgroundColor: '#0000ff',
        //justifyContent: 'space-between',
        alignItems: 'center'
    },
    pairWinner: {
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#000000',
        width: 160,
        height: 77,
        //paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hisotricTitle: {
        fontWeight: 'bold',
        marginBottom: 3
    },
});