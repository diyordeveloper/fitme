import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    dataText: {
        fontSize: 17,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    dataBtn: {
        width: 115,
        height: 35,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    dataContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    input: {
        width: 50,
    },
    box: {
        width: 100,
        height: 40,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerBox: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 15,
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.GRAY_ONE,
    },
    yellow: {
        color:COLORS.YELLOW,
        fontSize: 12,
        fontWeight:'700',
        marginLeft: 25,
    },

})