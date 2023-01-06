import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    box: {
        marginHorizontal: 20,
        marginRight: 40,
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        color: '#CACACA'
    },
})