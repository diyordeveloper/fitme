import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderComponents from '../../../../components/header/header'
import Input_150 from '../../../../components/Input_conponents/input_150'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view'
import Your_Plan_Modal from '../../../../components/your_plan_Modal/modal_one'
import Your_Plan_Modal_Two from '../../../../components/your_plan_Modal/modal_two'

const Your_Plan_Screen = () => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.PLAN as never)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='Создание своего плана' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 130, }}>
                   
                    <TextInput style={styles.inputHeader} />
                    <Text style={styles.inputText}>Название плана питания</Text>
                    <TextInput style={styles.inputHeader} />
                    <View style={styles.inputContainer}>
                        <Your_Plan_Modal />
                        <Your_Plan_Modal_Two />
                        <Your_Plan_Modal_Two />
                       <View>
                            <Text style={styles.text}>Углеводы</Text>
                            <View style={styles.btnOne}>
                                <View style={styles.inputCenter} />
                            </View>
                       </View>
                    </View>
                    <Text style={styles.inputText}>Количество планов</Text>
                    <Bottom_Auth style={styles.btnGreen} text='План 1' />
                    <Bottom_Auth style={styles.btnGreen} text='План 2' />
                    <Bottom_Auth onPress={onPress} style={styles.btn} text='План 3' />
                    <View style={styles.addBtnContainer}>
                        <TouchableOpacity style={styles.addBtn}>
                            <Text style={styles.addBtnText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.textCenter}>План</Text>
                        <TouchableOpacity style={styles.addBtn}>
                            <Text style={styles.addBtnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.inputText}>Описание</Text>
                    <TextInput multiline={true} style={styles.footerInput} />
                    <Bottom_Auth style={{ marginHorizontal: 40, marginTop: 40, }} text='Сохранить в “ Мои планы “' />
                </View>
            </ScrollView>

        </View>
    )
}

export default Your_Plan_Screen