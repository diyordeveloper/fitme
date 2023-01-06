import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    text: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginHorizontal: 20,
        marginVertical: 15,
    },
    titleContainer: {
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.GRAY_ONE,
    },
    btnFFF: {
        borderWidth: 1.5,
        backgroundColor: COLORS.BLACK,
        borderColor: COLORS.WHITE,
        marginBottom: 10,
    },
    btn: {
        width: 40,
        height: 40,
        borderWidth: 1.5,
        borderColor: '#8E8E8E',
        borderRadius: 40,
        alignItems:'center',
        justifyContent:'center',

    },
    btnText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginHorizontal: 10,
    },
    btnBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 20,
    },
    btnBlack:{
        backgroundColor: COLORS.BLACK_TWO,
        marginBottom: 10,
    },
    t:{
        color:'#8E8E8E',
        fontSize: 25,
        fontWeight:'bold',
        marginBottom: 2.

    },
    btnFF:{
        backgroundColor: COLORS.GREEN,
        marginBottom: 10,
    },
    input:{
        marginHorizontal: 20,
    },
})