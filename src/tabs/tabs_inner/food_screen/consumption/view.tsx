import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Input_150 from '../../../../components/Input_conponents/input_150'
import Product_name from '../../../../components/product_name/product_name'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view'
const Consumption_Screen = () => {
    const navigation = useNavigation()
    const onProductPress = () => {
        navigation.navigate(ROUTES.PRODUCTS as never)
    }
    const onPress = () => {
        navigation.navigate(ROUTES.NUTRITION as never)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents bottom={true} text='Развёрнутые рекомендации' title=' Еда употреблённая за сутки' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 140, }}>

                    <View style={styles.calendar}>
                        <Text style={styles.textCalendar}>Calendar !</Text>
                    </View>

                    <View style={styles.box}>
                        <Input_150 title='Дефицитная норма Ккал' />
                        <Input_150 inputView={false} style={styles.input} title='Б' />
                        <Input_150 inputView={false} style={styles.input} title='Ж' />
                        <Input_150 inputView={false} style={styles.input} title='У' />
                    </View>
                    <View style={styles.boxOne}>
                        <Input_150 inputView={false} style={styles.inputTwo} title='Дефицитная норма Ккал' />
                        <Input_150 inputView={false} style={styles.inputOne} title='Б' />
                        <Input_150 inputView={false} style={styles.inputOne} title='Ж' />
                        <Input_150 inputView={false} style={styles.inputOne} title='У' />
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <Product_name onPressOne={onPress}  onPress={onProductPress} />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Consumption_Screen