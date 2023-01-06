import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Default_Input from '../../../../components/deafult_input/defauly_input'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view'

const Create_Program = () => {


    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate(ROUTES.WORKOUT as never)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='Создание своей программы' />
            <ScrollView>
                <View style={{ marginBottom: 100, }}>
                    <Default_Input textStyle={{ fontSize: 13 }} title='Имя составителя' />
                    <Text style={styles.text}>Название программы</Text>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Для достижения видимого результата в тренировках груди важен прогресс рабочих весов.
                        </Text>
                    </View>
                    <Text style={styles.text}>Кол-во тренировок в неделю</Text>

                    <Bottom_Auth onPress={onPress} style={styles.btnFFF} text='Тренировка 1' />
                    <Bottom_Auth style={styles.btnFFF} text='Тренировка 2' />
                    <Bottom_Auth style={styles.btnFFF} text='Тренировка 3' />

                    <View style={styles.btnBox}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.t}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.btnText}>Тренировка</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.t}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>Кол-во недель</Text>
                    <Bottom_Auth style={styles.btnBlack} text='Неделя 1-4' />
                    <Bottom_Auth style={styles.btnBlack} text='Неделя 5-8' />
                    <View style={styles.btnBox}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.t}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.btnText}>Недели</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.t}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <Default_Input textStyle={{ fontSize: 13 }} title='Описание' style={{ height: 130, }} />


                    <Bottom_Auth style={{ marginTop: 50, }} text='Сохранить в “ Мои Программы “' />
                </View>
            </ScrollView>
        </View>
    )
}

export default Create_Program