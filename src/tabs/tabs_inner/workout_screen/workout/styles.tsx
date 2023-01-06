import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    box: {
        justifyContent: 'center',
        flex: 1,
    },
    btn: {
        backgroundColor:COLORS.BLACK,
        borderWidth: 1.5,
        borderColor:COLORS.WHITE,
        borderStyle: 'dashed',
    },
})