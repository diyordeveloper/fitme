import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../themes/constants";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBack: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'flex-end',
        paddingBottom: 30,
    },
    btn: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 15,
        backgroundColor: 'rgba(37, 35, 51, 0.5);',
        marginHorizontal: 15,
        borderRadius: 10,
        paddingVertical: 14,
        marginVertical: 6,
    },
    btnText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.WHITE,
        marginLeft: 20,
    },
})
