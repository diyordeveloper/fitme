import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLACK,
        flex: 1,
    },
    kcalContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        flexDirection: "row",
        width: 85,
        height: 45,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
        marginTop: 10,
    },
    boxLeft: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#353535',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    kcalBox: {
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    planContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40,
        alignItems: 'center',
    },
    planBox: {
        width: 65,
        height: 27,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 30,
    },
    planBoxOne: {},
    planText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    planTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.GRAY_ONE,
    },
    receptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    receptionBox: {
        width: 65,
        height: 27,
        borderBottomWidth: 1,
        borderColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 30,
    },
    generalContainer: {
        marginTop: 30,
        marginHorizontal: 20,
        backgroundColor: COLORS.BLACK_TWO,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
    },
    generalBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    textRed: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.RED,
    },
    generalText: {
        color: COLORS.WHITE,
        fontSize: 13,
        fontWeight: "700",
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 7,
    },
    btn: {
        borderWidth: 1.5,
        borderColor: COLORS.RED,
        backgroundColor: COLORS.BLACK,
        marginHorizontal: 40,
        marginTop: 30,
    },
    btnText: {
        color: COLORS.RED,
    },
    recommendationsBox: {
        marginHorizontal: 20,
    },
    recommendationsText: {
       fontSize: 12,
       fontWeight:"600",
       color:COLORS.WHITE,
       marginTop: 25,
       marginBottom: 15,
       
    },
    input: {
        height: 122,
        backgroundColor: COLORS.BLACK_TWO,
        paddingHorizontal: 15,
        paddingTop: 15,
        borderRadius: 10,
        color:COLORS.WHITE,
    },
})