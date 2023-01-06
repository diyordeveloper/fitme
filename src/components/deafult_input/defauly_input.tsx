import React from 'react';
import {
    KeyboardTypeOptions,
    StyleProp,
    Text,
    TextInputProps,
    TextStyle,
    ViewStyle,
} from 'react-native';
import {
    StyleSheet,
    TextInput,
} from 'react-native';
import { COLORS } from '../../themes/constants';

export interface DefaultInputProps extends TextInputProps {
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    value?: string;
    style?: StyleProp<ViewStyle>;
    title?: string,
    textStyle?: StyleProp<TextStyle>;
}

const Default_Input = ({
    placeholder,
    onChangeText,
    style,
    value,
    textStyle,
    title,
    ...rest
}: DefaultInputProps) => {
    return (
        <>
            <Text style={[styles.textCart, textStyle]}>{title}</Text>
            <TextInput
                placeholderTextColor={'#fff'}
                placeholder={placeholder}
                style={[styles.input, style]}
                onChangeText={onChangeText}
                value={value}
                {...rest}
            />
        </>
    );
};

export default Default_Input;

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 15,
        height:50,
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 20,
        color: COLORS.WHITE,
        borderRadius: 10,
    },
    textCart: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginVertical: 16,
        marginLeft: 20,
    },
});
