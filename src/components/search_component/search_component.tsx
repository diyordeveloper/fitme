import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SearchIcon } from '../../assets/icon/24px'
import { COLORS } from '../../themes/constants'

const Search_Component = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholderTextColor={'#fff'} placeholder='Поиск' style={styles.input} />
            <TouchableOpacity style={styles.btn}>
                <SearchIcon />
            </TouchableOpacity>
        </View>
    )
}

export default Search_Component

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLACK_TWO,
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    input: {
        width: '85%',
        color: COLORS.WHITE,
    },
    btn: {
        paddingVertical: 14,
        paddingHorizontal:14,
    },
})