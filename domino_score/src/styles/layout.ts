import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    players: {
        paddingHorizontal: 20,
        width: '100%',
        height: 85,
        flexDirection: 'row'
    }
});