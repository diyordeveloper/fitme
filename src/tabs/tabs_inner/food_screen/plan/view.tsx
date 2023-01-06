import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderComponents from '../../../../components/header/header'
import Input_150 from '../../../../components/Input_conponents/input_150'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view';

const Plan_Screen = () => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.YOUR_PLAN as never)
    }
    const onMealPress = () => {
        navigation.navigate(ROUTES.MEAL as never)
    }
    const onPlanePress = () => {
        navigation.navigate(ROUTES.ADJUSTMENT as never)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='План 1' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 130, }}>
                    <View style={styles.inputContainer}>
                        <Input_150 inputView={false} style={styles.input} title='Целевые Ккал' />
                        <Input_150 inputView={false} style={styles.inputOne} title='Б' />
                        <Input_150 inputView={false} style={styles.inputOne} title='Ж' />
                        <Input_150 inputView={false} style={styles.inputOne} title='У' />
                    </View>
                    <View style={styles.inputColorContainer}>
                        <Input_150 inputView={false} style={styles.inputColo} title='Фактические Ккал' />
                        <Input_150 inputView={false} style={styles.inputColorOne} title='Б' />
                        <Input_150 inputView={false} style={styles.inputColorOne} title='Ж' />
                        <Input_150 inputView={false} style={styles.inputColorOne} title='У' />
                    </View>
                    <View>
                        <Bottom_Auth onPress={onMealPress} style={styles.btnGreen} text='Приём 1' />
                        <Bottom_Auth style={styles.btn} text='Приём 2' />
                        <Bottom_Auth style={styles.btn} text='Приём 3' />
                        <View style={styles.addBtnContainer}>
                            <TouchableOpacity style={styles.addBtn}>
                                <Text style={styles.addBtnText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.textCenter}>Приём пищи</Text>
                            <TouchableOpacity style={styles.addBtn}>
                                <Text style={styles.addBtnText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={onPlanePress} style={styles.borderBox}>
                        <Text style={styles.borderText}>Вывести все приемы пищи в одно окно и подогнать под нужное кол-во Ккал и БЖУ</Text>
                    </TouchableOpacity>
                    <Bottom_Auth onPress={onPress} style={{ marginHorizontal: 40, }} text='Сохранить' />
                </View>
            </ScrollView>
        </View>
    )
}

export default Plan_Screen