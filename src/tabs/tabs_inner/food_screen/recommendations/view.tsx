import { View, Text,} from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import SafeAreaView from 'react-native-safe-area-view';

const RecommendationsScreen = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='Рекомендации' />
            <View style={styles.box}>
                <Text style={styles.text}>
                    Расчёт вашей суточной нормы калорий, т.е. тех калорий, которые нужны
                    для поддержания того веса, который вы имеете на данный момент. Из этих
                    калорий будет вычитаться то количество калорий (количество дефицита), которое
                    вы укажите далее
                </Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>
                    Расчёт вашей суточной нормы калорий, т.е. тех калорий, которые нужны
                    для поддержания того веса, который вы имеете на данный момент. Из этих
                    калорий будет вычитаться то количество калорий (количество дефицита), которое
                    вы укажите далее
                </Text>
            </View>
        </View>
    )
}

export default RecommendationsScreen