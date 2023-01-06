import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles =StyleSheet.create({
    container:{
        backgroundColor:COLORS.BLACK,
        flex: 1,
    },

    inputColorContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: COLORS.BLACK_TWO,
        justifyContent: 'space-between',
        paddingBottom: 15,
        marginVertical: 20,
    },
    inputColo: {
        width: 150,
        backgroundColor: '#232323'
    },
    inputColorOne: {
        width: 50,
        backgroundColor: '#232323',
    },
    text:{
        fontSize: 12,
        fontWeight:"600",
        color:COLORS.WHITE,
        marginHorizontal: 20,
        marginVertical: 15,
    },
    input:{
        marginHorizontal: 20,
        height: 125,
        backgroundColor:COLORS.BLACK_TWO,
        borderRadius: 10,
        color:COLORS.WHITE,
        paddingHorizontal: 10,
        paddingTop: 10,
    }
})