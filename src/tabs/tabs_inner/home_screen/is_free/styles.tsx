import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    textBox: {
        marginHorizontal: 20,
    },
    textOne: {
        fontSize: 20,
        fontWeight:'700',
        color:COLORS.WHITE,
        marginBottom: 15,
    },
    textTwo: {
        fontSize: 12,
        color:COLORS.WHITE,
        fontWeight:'400',
    },
    btnBox:{
        flex: 1,
        justifyContent:'flex-end',
        paddingBottom: 200,
    },
})