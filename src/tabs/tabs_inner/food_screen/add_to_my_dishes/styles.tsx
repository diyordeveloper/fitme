import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    input: {
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 20,
        width:'90%',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 14,
        color: COLORS.WHITE,
        fontWeight: '600',
        textAlign:'left',
    },
    inputText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginLeft: 25,
        marginBottom: 15,
    },
    inputContainer: {
        marginHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    btnInput: {
        width: 50,
    },
    btn: {
        marginHorizontal: 40,
        backgroundColor: COLORS.DELETE_BLACK,
    },
    btnText: {
        color: 'rgba(255, 255, 255, 0.26);'
    },
    boxText: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 40,
        justifyContent: 'space-between',
    },
    text: {
        color: COLORS.GRAY_ONE,
        fontSize: 12,
        fontWeight:'600',
        marginBottom: 3,
    },
    textTop:{
        fontSize: 16,
        fontWeight:'700',
        color:COLORS.WHITE,
        textAlign:'center',
        marginBottom: 20,
    },
})