import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Input_150 from '../../../../components/Input_conponents/input_150'
import Product_name from '../../../../components/product_name/product_name'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import SafeAreaView from 'react-native-safe-area-view'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'

const Add_To_My_dishes_Screen = () => {

    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate(ROUTES.NUTRITION as never)
    }
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 70, }}>
                    <Text style={styles.inputText}>Название блюда</Text>
                    <Input_150 style={styles.input} />
                    <View style={styles.inputContainer}>
                        <Input_150 title='Ккал' />
                        <Input_150 title='Б' style={styles.btnInput} />
                        <Input_150 title='Ж' style={styles.btnInput} />
                        <Input_150 title='У' style={styles.btnInput} />
                    </View>
                    <View style={{ marginVertical: 30, }}>
                        <Product_name onPressOne={onPress} />
                    </View>
                    <Text style={styles.textTop}>Выберите категорию нового блюда</Text>
                    <View style={styles.boxText}>
                        <TouchableOpacity>
                            <Text style={styles.text}>Второе</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}>Жидкое</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: '#fff' }}>
                            <Text style={[styles.text, { color: '#fff' }]}>Сладкое</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}>Молочное</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}>Фастфуд</Text>
                        </TouchableOpacity>
                    </View>
                    <Bottom_Auth onPress={goBack} style={styles.btn} textStyle={styles.btnText} text='Добавить в “ Мои блюда “' />
                </View>
            </ScrollView>
        </View>
    )
}

export default Add_To_My_dishes_Screen