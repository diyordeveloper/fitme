import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    box: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color:COLORS.WHITE,
    },
})