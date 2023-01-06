import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    box: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: COLORS.BLACK_TWO,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 5,
    },
    textRed: {
        fontSize: 12,
        fontWeight: '700',
        color: COLORS.RED,
    },
    text: {
        fontSize: 12,
        fontWeight: '700',
        color: COLORS.WHITE,
    },
    textData: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.GRAY_ONE,
    },
})