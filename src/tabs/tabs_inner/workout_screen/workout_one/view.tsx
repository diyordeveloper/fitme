import { View, } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import Modal_workout from '../../../../components/modal_workout_component/modal_workout'
import SafeAreaView from 'react-native-safe-area-view'

const Workout_One_Screen = () => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.ADD_EXERCISES as never)
    }
    const Press = () => {
        navigation.navigate(ROUTES.WORKOUT_TWO as never)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='Тренировка 1' />
            <View style={styles.box}>
                <Modal_workout modal={true} onPress={Press}/>
                <Modal_workout />
                <View style={styles.btnBox}>
                    <Bottom_Auth onPress={onPress} style={styles.btn} text='Добавить упражнение' />
                    <Bottom_Auth onPress={onPress} text='Утвердить' />
                </View>
            </View>
        </View>
    )
}

export default Workout_One_Screen
