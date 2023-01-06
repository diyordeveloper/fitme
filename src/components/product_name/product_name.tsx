import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { CircleIcon } from '../../assets/icon/24px'
import { COLORS } from '../../themes/constants'


interface Props {
    onPress?: any,
    hasButton?: boolean,
    onPressOne?: any,
    onPressTwo?: any,
    circle?: boolean,
}

const Product_name = ({ onPress = () => { }, onPressOne = () => { }, onPressTwo = () => { }, circle = true, hasButton = true }: Props) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.headerBox}>
                        <Text style={styles.text}>Наименование продукта</Text>
                        {circle ?
                            <TouchableOpacity onPress={onPressTwo}>
                                <CircleIcon />
                            </TouchableOpacity>
                            : null}
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'center', }}>
                        <Text style={styles.textGreen}>Кол-во</Text>
                    </View>
                </View>
                <View style={styles.boxOne}>
                    <TouchableOpacity onPress={onPressOne} activeOpacity={0.7} style={styles.headerBox}>
                        <Text style={styles.text}>Творог 5%</Text>
                        <Text style={styles.title}>Очистить</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.3, justifyContent: 'center', }}>
                        <TextInput style={styles.textNumber} placeholder='2' placeholderTextColor={'#fff'} />
                    </View>
                </View>
                <View style={styles.boxOne}>
                    <TouchableOpacity onPress={onPressOne} activeOpacity={0.7} style={styles.headerBox}>
                        <Text style={styles.text}>Творог 5%</Text>
                        <Text style={styles.title}>Очистить</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.3, justifyContent: 'center', }}>
                        <TextInput placeholder='2' placeholderTextColor={'#fff'} style={styles.textNumber} />
                    </View>
                </View>
            </View>
            {hasButton ?
                <View style={styles.btnContainer}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.btnText}>Строка</Text>
                    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.btn}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                :
                null
            }
        </View>
    )
}

export default Product_name

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 20,
        height: 115,
    },
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.7,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRightWidth: 1,
        borderColor: '#353535',
    },
    box: {
        backgroundColor: COLORS.DELETE_BLACK,
        flex: 1,
        flexDirection: 'row',

    },
    boxOne: {
        backgroundColor: COLORS.BLACK_TWO,
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#313131'
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.WHITE,

    },
    title: {
        fontSize: 11,
        fontWeight: '600',
        color: '#313131',
    },
    textGreen: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.GREEN,
        textAlign: 'center',
    },
    textNumber: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
        textAlign: 'center',
    },
    btnContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderColor: '#8E8E8E',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 25,
        color: '#8E8E8E',
        fontWeight: 'bold',
        top: -2,
    },
    btnText: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.WHITE,
        marginHorizontal: 15,
    },

})