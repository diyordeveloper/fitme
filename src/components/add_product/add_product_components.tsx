import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'

interface Props {
    HasTitle?: boolean
}

const Add_product_components = ({ HasTitle = true }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.textBox}>
                    <Text style={styles.textHeader}>Рис</Text>
                    <Text style={styles.text}>на 100гр. продукта</Text>
                </View>

                {HasTitle ?
                    <TouchableOpacity activeOpacity={0.6} style={styles.btn} />
                    :
                    <Text style={styles.deleteText}>Удалить</Text>
                }

            </View>
            <View style={styles.footerBox}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Б - 18 гр</Text>
                    <Text style={styles.title}>Ж - 18 гр</Text>
                    <Text style={styles.title}>У - 18 гр</Text>
                </View>
                <Text style={styles.titleRed}>200 каллорий</Text>
            </View>
        </View>
    )
}

export default Add_product_components

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginBottom: 15,
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textBox: {},
    textContainer: {},
    text: {
        fontSize: 10,
        fontWeight: '300',
        color: COLORS.WHITE,
    },
    title: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE
    },
    textHeader: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.WHITE,
    },
    titleRed: {
        fontSize: 13,
        fontWeight: '700',
        color: COLORS.RED,
        marginLeft: 20,

    },
    btn: {
        width: 20,
        height: 20,
        borderColor: COLORS.GRAY_ONE,
        borderWidth: 1,
        borderRadius: 3,
    },
    footerBox: {
        flexDirection: 'row',
        marginTop: 7,
        alignItems: 'center',
    },
    deleteText: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.RED,
    },
})