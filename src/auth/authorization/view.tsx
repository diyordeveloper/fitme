import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AppleIcon, FacebookIcon, GoogleIcon } from '../../assets/icon/24px'
import { COLORS } from '../../themes/constants'
import { AuthorizationHooks } from './hooks'

const AuthorizationScreen = () => {
    const { setPhonenumber, onRegisterPress, onConfirmationPress, phonenumber } = AuthorizationHooks()
    console.log(phonenumber, '----------')

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Авторизация</Text>
                <TextInput
                    placeholderTextColor={'#404B52'}
                    style={styles.input}
                    placeholder='Введите ваш номер телефона'
                    value={phonenumber}
                    onChangeText={setPhonenumber}
                    keyboardType="phone-pad"
                />
                <TouchableOpacity onPress={onConfirmationPress} activeOpacity={0.7} style={styles.btn}>
                    <Text style={styles.btnText}>Войти</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.textFooter}>Авторизоваться при помощи</Text>
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
                <Text style={styles.text}>или</Text>
                <TouchableOpacity
                    onPress={onRegisterPress}
                    activeOpacity={0.6}
                    style={{
                        borderBottomWidth: 1,
                        borderColor: COLORS.BLACK,
                    }}>

                    <Text style={styles.textOne}>Зарегистрируйтесь</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default AuthorizationScreen