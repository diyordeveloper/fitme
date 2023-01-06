import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AppleIcon, FacebookIcon, GoogleIcon } from '../../assets/icon/24px'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../navigation/ROUTES'

const RegistrationScreen = () => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.NUMBER_CONFIRMATION as never)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Регистрация</Text>
                <TextInput placeholderTextColor={'#404B52'} style={styles.input} placeholder='Как вас зовут?' />
                <TextInput placeholderTextColor={'#404B52'} style={styles.input} placeholder='Ведите Ваш номер телефона' />
                <Text style={styles.text}>Регистрируясь, вы принимаете наши Правила и Условия</Text>
                <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.btn}>
                    <Text style={styles.btnText}>Зарегистрироваться</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.textFooter}>Вы можете авторизоваться при помощи</Text>
                <View style={{ alignItems: 'center', }}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <AppleIcon />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <FacebookIcon />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <GoogleIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RegistrationScreen