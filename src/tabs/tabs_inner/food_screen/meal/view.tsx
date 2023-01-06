import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderComponents from '../../../../components/header/header'
import Input_150 from '../../../../components/Input_conponents/input_150'
import Product_name from '../../../../components/product_name/product_name'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import SafeAreaView from 'react-native-safe-area-view'

const Meal_Screen = () => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.PRODUCTS as never)
    }
    const Go = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='1-й прием пищи' />
            <ScrollView>
                <View style={{marginBottom: 70}}>
                    <View style={styles.inputColorContainer}>
                        <Input_150 style={styles.inputColo} title='Фактические Ккал' />
                        <Input_150 style={styles.inputColorOne} title='Б' />
                        <Input_150 style={styles.inputColorOne} title='Ж' />
                        <Input_150 style={styles.inputColorOne} title='У' />
                    </View>
                    <Product_name circle={false} onPress={onPress} />
                    <View>
                        <Text style={styles.text}>Рекомендации</Text>
                        <TextInput multiline={true} style={styles.input} />
                    </View>
                    <Bottom_Auth style={{ marginHorizontal: 40, marginTop: 40, }} onPress={Go} text='Сохранить' />
                </View>
            </ScrollView>
        </View>

    )
}

export default Meal_Screen