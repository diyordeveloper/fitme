import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    text:{
        fontWeight:'400',
        fontSize: 14,
        color:COLORS.WHITE,
    },
    btn:{
        width: 55,
        height:27,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor:COLORS.WHITE,
        backgroundColor:COLORS.BLACK,
        marginHorizontal: 10,
    },
    btnText:{
        fontWeight:'600',
        fontSize: 11,
        color:COLORS.WHITE,
    },
    title:{
        fontWeight:'700',
        fontSize: 16,
        color:COLORS.WHITE,
    },
})