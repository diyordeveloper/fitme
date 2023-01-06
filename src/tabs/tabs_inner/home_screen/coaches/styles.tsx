import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    headerContainer: {
        flexDirection: 'row',

    },
    image: {
        width: 90,
        height: 90,
        marginHorizontal: 20,
        borderRadius: 120,
    },
    headerRight: {
        justifyContent: 'space-between',
        paddingVertical: 10,
        flex: 1,
        paddingRight: 20,
    },
    textName: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    textLive: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    textOld: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE,
        marginTop: 5,
    },
    textCart: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginVertical: 16,
        marginLeft: 20,
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 20,
        color: COLORS.WHITE,
        borderRadius: 10,
        fontSize: 12,
    },
    text: {
        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 20,
    },
    btn: {
        marginVertical: 40,
        borderWidth: 1,
        borderColor: COLORS.RED_ONE,
        marginHorizontal: 20,
        paddingVertical: 16,
        alignItems:'center',
        borderRadius: 10,
    },
    btnText: {
        color:COLORS.RED_ONE,
        fontSize: 15,
        fontWeight:'700',
    },
})