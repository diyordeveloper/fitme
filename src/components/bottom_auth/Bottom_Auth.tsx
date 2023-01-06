import {Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'

export interface ButtonProps {
    text?: string;
    onPress?: any;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    inActive?: boolean;
    loading?: boolean;

}

const Bottom_Auth = ({
    text,
    style,
    textStyle,
    onPress = () => { },
}: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.btn, style]}>
            <Text style={[styles.btnText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Bottom_Auth

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.RED,
        marginHorizontal: 20,
        height: 51,
        justifyContent:'center',
        borderRadius: 10,
        alignItems: 'center',
    },
    btnText: {
        fontSize: 15,
        color: COLORS.WHITE,
        fontWeight: '700',
    },
})