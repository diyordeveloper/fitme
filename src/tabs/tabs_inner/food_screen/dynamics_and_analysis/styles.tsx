import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    btnContainer: {
        marginTop:40,
    },
    btn: {
        backgroundColor:COLORS.BLACK,
        borderWidth: 1,
        borderColor:COLORS.WHITE,
        borderStyle: 'dashed',
        marginHorizontal: 40,
    },
})