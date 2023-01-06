import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions, StyleProp, ViewStyle, TextStyle, TextInputProps, Touchable, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'

export interface InputProps extends TextInputProps {
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    value?: string;
    style?: StyleProp<ViewStyle>;
    title?: string,
    textStyle?: StyleProp<TextStyle>;
    button?: boolean,
    touch?: boolean,
    onPress?: any,
    inputInner?: any,
    inputView?: boolean,
    inputText?: string,
}

const Input_150 = ({
    placeholder,
    onChangeText,
    style,
    value,
    textStyle,
    inputText,
    title,
    button = true,
    touch = true,
    inputInner = false,
    onPress = () => { },
    inputView = true,
    ...rest

}: InputProps) => {
    return (
        <View style={{ alignItems: 'center', }}>
            {button
                ?
                <Text style={[styles.textCart, textStyle]}>{title}</Text>
                :
                <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.btn]}>
                    <Text style={[styles.textBtn, textStyle]}>{title}</Text>
                </TouchableOpacity>
            }
            {touch ?
                <View style={[styles.inputContainer, style]}>
                    {inputView ? <TextInput
                        placeholderTextColor={'#252525'}
                        placeholder={placeholder}
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={value}
                        {...rest}
                    /> : <View

                        style={styles.input}

                    />}
                    {inputInner ? <View style={{ marginHorizontal: 10, }}><Text style={[styles.textCart, textStyle]}> {'ккал'}</Text></View> : null}
                </View>
                :
                <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.input, style]}>
                    <Text style={{ color: '#252525', fontSize: 14, }}>{inputText}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Input_150

const styles = StyleSheet.create({
    input: {
        flex: 1,
        color: COLORS.WHITE,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCart: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginVertical: 10,
    },
    btn: {
        width: 120,
        height: 28,
        borderWidth: 1,
        borderColor: COLORS.DARK,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    textBtn: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    inputContainer: {
        width: 150,
        height: 50,
        backgroundColor: COLORS.BLACK_TWO,
        color: COLORS.WHITE,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})