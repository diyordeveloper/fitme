import { StyleSheet } from "react-native"
import { COLORS } from "../../themes/constants"
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    footerContainer: {
        height: '40%',
        justifyContent: 'flex-end',
        paddingBottom: 30,
        alignItems: 'center',
    },
    headerContainer: {
        height: '60%',
        justifyContent: 'flex-end',
    },
    input: {
        backgroundColor: COLORS.INPUT_WHITE,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 5,
        color: COLORS.SPACE_GREY,
        fontSize: 14,
        fontWeight: '400',
        marginVertical: 10,
    },
    textHeader: {
        color: COLORS.BLACK_ONE,
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
    },
    btn: {
        backgroundColor: COLORS.BLACK,
        paddingVertical: 16,
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 20,
    },
    btnText: {
        color: COLORS.WHITE,
        fontSize: 17,
        fontWeight: '500',
    },
    textFooter: {
        textAlign: 'center',
        color: COLORS.BLACK_ONE,
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 15,
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '300',
        color: COLORS.SPACE_GREY,
        marginVertical: 20,
    },

    textOne: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '300',
        color: COLORS.BLACK,

    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%',
        justifyContent: 'space-around',
        paddingBottom: 40, 
    },
})