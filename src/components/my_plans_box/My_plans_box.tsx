import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'

interface Props {
    onPress?: any
}

const My_Plans_Component = ({ onPress = () => { } }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.headerTextOne}>2000 ккал.</Text>
                <Text style={styles.headerTextTwo}></Text>
            </View>
            <View style={styles.centerBox}>
                <View style={styles.textContainer}>
                    <Text style={styles.textOne}>20%</Text>
                    <Text style={styles.text}>Белков</Text>
                    <Text style={styles.textOne}>100гр</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textOne}>20%</Text>
                    <Text style={styles.text}>Жиров</Text>
                    <Text style={styles.textOne}>100гр</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textOne}>20%</Text>
                    <Text style={styles.text}>Углеводов</Text>
                    <Text style={styles.textOne}>100гр</Text>
                </View>
            </View>
            <View style={styles.footerBox}>
                <Text style={styles.footerTextOne}></Text>
                <Text style={styles.footerTextTwo}></Text>
            </View>
        </TouchableOpacity>
    )
}

export default My_Plans_Component

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 20,
        borderRadius: 10,
        height: 140,
        paddingHorizontal: 10,
        paddingVertical: 13,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTextOne: {
        fontSize: 18,
        fontWeight: "700",
        color: COLORS.WHITE,
    },
    headerTextTwo: {
        fontSize: 18,
        fontWeight: "700",
        color: COLORS.RED_ONE,
    },
    centerBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textContainer: {
        marginHorizontal: 10,
    },
    textOne: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.WHITE,
        textAlign: 'center',
    },
    text: {
        color: COLORS.GRAY_ONE,
        fontSize: 11,
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: 2,
    },
    textTwo: {
        fontSize: 13,
        fontWeight: '700',
        color: COLORS.WHITE,
        textAlign: 'center',
    },
    footerBox: {
        flexDirection: 'row',
    },
    footerTextOne: {
        fontSize: 11,
        fontWeight: '700',
        color: COLORS.WHITE,
    },
    footerTextTwo: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE,
    },

})