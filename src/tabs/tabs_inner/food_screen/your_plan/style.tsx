import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    inputHeader: {
        marginHorizontal: 20,
        backgroundColor: COLORS.BLACK_TWO,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: COLORS.WHITE,
    },
    inputText: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginLeft: 20,
        marginVertical: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    input: {
        width: 60,
    },
    inputOne: {
        width: 80,
    },
    btnGreen: {
        backgroundColor: COLORS.GREEN,
        marginVertical: 6,
    },
    btn: {
        marginVertical: 5,
        borderWidth: 1,
        backgroundColor: COLORS.BLACK,
        borderColor: COLORS.WHITE,
    },
    addBtnContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtn: {
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#8E8E8E',
    },
    addBtnText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#8E8E8E',
        top: -2,
    },
    textCenter: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.WHITE,
        marginHorizontal: 10,
    },
    footerInput: {
        height: 86,
        marginHorizontal: 20,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    inputCenter: {
        height: '100%',
        borderWidth: 0.7,
        borderColor: '#353535',
    },
    btnOne: {
        width: 85,
        height: 50,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginVertical: 10,
        textAlign: 'center',
    },
})