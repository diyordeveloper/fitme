import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'
// @ts-ignore
const Meal_Plans_Component = ({item}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.headerTextOne}>{item.kcal}</Text>
                <Text style={styles.headerTextTwo}>{item.mony}</Text>
            </View>
            <View style={styles.centerBox}>
                <View style={styles.textContainer}>
                    <Text style={styles.textOne}>{item.interest}</Text>
                    <Text style={styles.text}>Белков</Text>
                    <Text style={styles.textOne}>{item.belkov}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textOne}>{item.interest}</Text>
                    <Text style={styles.text}>Жиров</Text>
                    <Text style={styles.textOne}>{item.belkov}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textOne}>{item.interest}</Text>
                    <Text style={styles.text}>Углеводов</Text>
                    <Text style={styles.textOne}>{item.belkov}</Text>
                </View>
            </View>
            <View style={styles.footerBox}>
                <Text style={styles.footerTextOne}>Составил: </Text>
                <Text style={styles.footerTextTwo}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Meal_Plans_Component

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLACK_TWO,
        marginHorizontal: 20,
        borderRadius: 10,
        height: 140,
        paddingHorizontal: 10,
        paddingVertical: 13,
        justifyContent:'space-between',
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
        fontWeight:'700',
        color:COLORS.WHITE,
    },
    footerTextTwo: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE,
    },

})