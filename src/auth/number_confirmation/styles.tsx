import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {},
    input: {
        width: 60,
        height: 60,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E5E9EF',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '600',
        color: '#0A0615',
    },
    text: {
        fontSize: 25,
        fontWeight: '600',
        color: '#0A0615',
        textAlign: "center",
        marginBottom: 10,
    },
    textOne: {
        fontSize: 15.5,
        fontWeight: '400',
        color: '#0A0615',
        textAlign: 'center',
    },
    textTwo: {
        fontSize: 14.5,
        fontWeight: '600',
        color: COLORS.BLACK,
        textAlign: 'center',
    },
    btn: {
        borderBottomWidth: 1,
        borderColor: COLORS.BLACK,
        marginHorizontal: 20,
    },
    footerBox: {
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between',
    },

})