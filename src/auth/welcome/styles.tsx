import { Dimensions, Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../themes/constants';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    circle: {
        width: 7.7,
        height: 7.7,
        marginLeft: 6,
        borderRadius: 12,
    },
    bgLight1: {
        backgroundColor: COLORS.GRAY,
    },
    bgLight2: {
        backgroundColor: COLORS.WHITE,
    },
    main: {},
    bottom: {
        alignItems: 'center',
        marginTop: 10,
    },
    imageBack: {
        width: Width,
        height: Height / 1.5,
        justifyContent: "flex-end",
    },
    btn: {
        backgroundColor: COLORS.WHITE,
        marginHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 5,
        alignItems: 'center',
    },
    btnText: {
        fontSize: 16,
        color: COLORS.BLACK,
        fontWeight: '500',
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    text: {
        color: COLORS.WHITE

    },
    textOne: {
        color: COLORS.WHITE,
        fontSize: 15,
        fontWeight: '400',
    },
    textContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    fit: {
        color:COLORS.RED,
        fontSize: 15,
        fontWeight:'bold',

    },
    me: {
        color: COLORS.WHITE,
        fontSize: 15,
        fontWeight: 'bold',
    },
    textImage: {
        color: COLORS.WHITE_ONE,
        fontSize: 15,
        fontWeight: '400',
    },
});
