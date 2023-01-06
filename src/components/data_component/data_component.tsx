import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'


const Data_component = () => {
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <View style={{marginHorizontal: 20, flexDirection:'row'}}>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>5</Text>
                    <Text style={styles.title}>Пн</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.dataBtn]}>
                    <Text style={[styles.title]}>6</Text>
                    <Text style={[styles.title]}>Вт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>7</Text>
                    <Text style={styles.title}>Ср</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>8</Text>
                    <Text style={styles.title}>Чт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>9</Text>
                    <Text style={styles.title}>Пт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>10</Text>
                    <Text style={styles.title}>Сб</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>11</Text>
                    <Text style={styles.title}>Вс</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>12</Text>
                    <Text style={styles.title}>Пн</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.dataBtn]}>
                    <Text style={[styles.title]}>13</Text>
                    <Text style={[styles.title]}>Вт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>14</Text>
                    <Text style={styles.title}>Ср</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>15</Text>
                    <Text style={styles.title}>Чт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>16</Text>
                    <Text style={styles.title}>Пт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>17</Text>
                    <Text style={styles.title}>Сб</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataBtn}>
                    <Text style={styles.title}>18</Text>
                    <Text style={styles.title}>Вс</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Data_component

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    dataBtn: {
        width: 45,
        height: 50,
        borderWidth: 1,
        borderColor: '#505050',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    title: {
        fontSize: 13,
        fontWeight: '600',
        color: '#505050',
        marginVertical: 1,
    },
})