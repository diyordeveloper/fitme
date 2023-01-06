import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    inputContainer: {
        flexDirection:'row',
        paddingHorizontal: 20,
        justifyContent:'space-between',
        
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
        backgroundColor:COLORS.BLACK_TWO,
        justifyContent:'space-between',
        paddingBottom: 15,
        marginVertical: 20,
    },
    inputColo: {
        width: 150,
        backgroundColor:'#232323'
    },
    inputColorOne: {
        width: 50,
        backgroundColor:'#232323',
    },
    btnGreen: {
        backgroundColor: COLORS.GREEN,
        marginVertical: 6,
    },
    btn: {
        marginVertical: 5,
        backgroundColor: COLORS.BLACK_TWO,
    },
    addBtnContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtn: {
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#8E8E8E',
    },
    addBtnText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#8E8E8E',
        top: -2,
    },
    textCenter: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.WHITE,
        marginHorizontal: 10,
    },
    borderBox:{
        borderWidth: 1,
        borderColor:COLORS.RED,
        marginHorizontal: 40,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 40,
    },
    borderText:{
        fontSize: 15,
        fontWeight:'bold',
        color:COLORS.RED,
        textAlign:'center',
    },

})