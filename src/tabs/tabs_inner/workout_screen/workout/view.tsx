import { View, Text, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view'

const WorkoutScreen = () => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.ADD_EXERCISES as never)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='Тренировка 1' />
            <View style={styles.box}>
                <Bottom_Auth onPress={onPress} style={styles.btn} text='Добавить упражнение' />
            </View>
        </View>
    )
}

export default WorkoutScreen