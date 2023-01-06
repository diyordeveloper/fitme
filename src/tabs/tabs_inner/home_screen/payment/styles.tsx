import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 15,
    },
    iconBtn: {
        backgroundColor: '#2C2C2E',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginTop: 26,
        marginLeft: 20,
    },
    btn: {
        backgroundColor: COLORS.BLACK_TWO,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        marginHorizontal: 8.5,
        borderRadius: 16,
    },
    uzcard: {
        width: 40,
        height: 52,
    },
    visa: {
        width: 69,
        height: 21,
    },
    humo: {
        width: 68,
        height: 68
    },
    centerContainer: {
        marginBottom: 50,
    },

    footer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#3A3A3C',
        marginHorizontal: 20,
    },
    textOne: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginVertical: 16,
    },
    textBox: {
        marginHorizontal: 45,
        marginVertical: 15,
    },
    textPayment: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    textPaymentCenter: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginTop: 5,
    },

})