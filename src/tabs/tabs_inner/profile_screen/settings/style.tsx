import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    animated: {
        flexDirection: 'row',
        backgroundColor: COLORS.BLACK_TWO,
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
    },
    animatedOne: {
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 5,
    },
    textOne: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    btnLanguage: {
        marginVertical: 10,
    },
    activeText: {
        fontSize: 12,
        fontWeight: "600",
        color: COLORS.WHITE,
    },
    activeBox: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 30,
    },
})