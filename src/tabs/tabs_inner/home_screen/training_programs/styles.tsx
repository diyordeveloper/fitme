import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK
    },
    bottom:{
    paddingTop: 15,
    position: 'absolute',
    backgroundColor:COLORS.BLACK,
    height: 120,
    left: 10,
    right: 10,
    bottom:0,
    },
})