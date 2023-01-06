import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    input: {
        width: 150,
    },
    inputOne: {
        width: 50,
    },
    inputColorContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: COLORS.BLACK_TWO,
        justifyContent: 'space-between',
        paddingBottom: 15,
        marginVertical: 20,
    },
    inputColo: {
        width: 150,
        backgroundColor: '#232323'
    },
    inputColorOne: {
        width: 50,
        backgroundColor: '#232323',
    },
    footerContainer: {
        borderBottomWidth: 1,
        borderColor:'#353535'
    },
    box: {
        paddingHorizontal: 25,
        backgroundColor: COLORS.BLACK_TWO,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems:'center',
    },
    btn: {
        borderWidth: 1,
        borderColor:COLORS.WHITE,
        width:100,
        height: 30,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:30,
    },
    btnText: {
        fontSize :14,
        fontWeight:'700',
        color:COLORS.WHITE,
    },
    boxText: {
        fontSize: 11,
        fontWeight:'600',
        color:COLORS.WHITE,
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 30,
        alignItems:'center',
        marginVertical: 10,

    },
    textBox:{},
    title:{
        fontSize: 12,
        fontWeight:'400',
        color:COLORS.WHITE,
        marginVertical: 5,
    },
    textRed:{
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.WHITE,
        borderWidth: 1,
        borderColor:COLORS.RED,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 3,
        marginVertical: 2,
    },
})