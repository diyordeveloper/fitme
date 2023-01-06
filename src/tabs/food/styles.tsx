import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    center: {
        borderBottomWidth: 1,
        borderColor: '#353535',

    },
    btn: {
        width: 107,
        height: 50,
    },
    btnOne: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: COLORS.BLACK_TWO,
    },
    bottom: {
        borderWidth: 1.5,
        borderColor: COLORS.GREEN,
        backgroundColor: COLORS.BLACK,
        marginVertical: 20,
    },
    bottomOne: {
        borderWidth: 1.5,
        borderColor: COLORS.YELLOW,
        backgroundColor: COLORS.BLACK,
    },
    bottomText: {
        color: COLORS.GREEN,
    },
    bottomTextOne: {
        color: COLORS.YELLOW,
    },
    modalText: {
        fontSize: 10,
        fontWeight:'500',
        color:COLORS.WHITE,
        marginLeft: 20,
    },
    botton: {
        paddingTop: 15,
        position: 'absolute',
        backgroundColor: COLORS.BLACK,
        height: 120,
        left: 10,
        right: 10,
        bottom: 0,
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: COLORS.BLACK_TWO,
        width: 327,
        height: 387,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent:"space-around",
    },
    textHeader:{
        fontSize: 21,
        fontWeight:'700',
        color:COLORS.WHITE,
        textAlign:'center',
    },
    modalInput:{
        backgroundColor:'#232323',
        width: 110,
    },
    modalInputOne:{
        backgroundColor: '#232323',
        width: 50,
    },
    btnText:{
        fontSize: 11,
        textAlign:'center',
    },
    btnWhite:{
        height:37,
        width: 113,
        marginHorizontal:0,
        borderWidth: 1,
        borderColor:COLORS.WHITE,
        backgroundColor:COLORS.BLACK_TWO,
    },

})