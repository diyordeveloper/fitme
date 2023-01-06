import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'

interface Props {
    name?: string,
    work?: string,
    old?: string,
    live?: string,
    year?: string,
    onPress?: any,
    imgUrl?: ReturnType<typeof require>;
}

const Trainers_Box = ({ name, work, old, live, year, onPress = () => { }, imgUrl }: Props) => {

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
            <View style={styles.imageBox}>
                <Image style={styles.image} source={{ uri: `${imgUrl}` }} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.old}>{work}</Text>
                <Text style={styles.old}>{old} лет</Text>
                <View style={styles.box}>
                    <Text style={styles.old}>{live}</Text>
                    <Text style={styles.text}>Опыт - {year} лет</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Trainers_Box

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: COLORS.BLACK_TWO,
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    imageBox: {
        height: '100%',
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 120,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingRight: 15,
        paddingVertical: 10,
    },
    box: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    old: {
        fontSize: 11,
        color: COLORS.WHITE,
        fontWeight: '400'
    },
    text: {
        fontSize: 11,
        fontWeight: '700',
        color: COLORS.WHITE,
    },
})