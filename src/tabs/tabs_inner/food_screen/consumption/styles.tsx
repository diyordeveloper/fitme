import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    box: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 20,
        justifyContent: 'space-between',
    },
    boxOne: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor:COLORS.BLACK_TWO,
        paddingBottom: 15,
    },
    calendar: {
        marginHorizontal: 20,
        height: 300,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
    },
    textCalendar: {
        fontSize: 30,
        color: COLORS.WHITE,
    },
    input: {
        width: 50,
        height: 50,
    },
    inputOne: {
        width: 50,
        height: 50,
        backgroundColor: '#232323',
    },
    inputTwo: {
        backgroundColor:'#232323',
    },
})