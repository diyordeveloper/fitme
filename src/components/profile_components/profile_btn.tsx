import { View, Text, StyleProp, ViewStyle, TextStyle, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowRight } from '../../assets/icon/24px';
import { COLORS } from '../../themes/constants';

interface Props {
    title?: string,
    onPress?: any,
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    hasIcon?: boolean
}

const Profile_btn = ({ title, style, textStyle, onPress = () => { }, hasIcon = true }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.container, style]}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
            {hasIcon ? <ArrowRight /> : null}
        </TouchableOpacity>
    )
}

export default Profile_btn

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: COLORS.DARK,
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
})