import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    imageBox: {
        marginHorizontal: 20,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 214,
    },
    box: {
        marginHorizontal: 50,
        marginBottom: 20,
    },
    text: {
        fontSize:12,
        fontWeight: '400',
        color:'#CACACA',
        textAlign:'center',
    },
})