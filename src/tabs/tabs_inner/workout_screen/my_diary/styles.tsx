import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    headerText: {
        marginHorizontal: 20,
        color: COLORS.WHITE,
        fontSize: 17,
        fontWeight: '600',
    },
    btn: {
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.DARK,
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    bottom: {
        paddingTop: 15,
        position: 'absolute',
        backgroundColor: COLORS.BLACK,
        height: 100,
        left: 10,
        right: 10,
        bottom:0,
    },
})