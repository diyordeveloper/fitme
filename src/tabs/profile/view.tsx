import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import Profile_btn from '../../components/profile_components/profile_btn'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view';
import { useDispatch } from 'react-redux'
import { userLoggedOut } from '../../store/slices/userSlices'

const Profile_Screen = () => {
    const navigation = useNavigation();

    const onMyDetailsPress = () => {
        navigation.navigate(ROUTES.MY_DETAILS as never)
    }
    const onNotificationPress = () => {
        navigation.navigate(ROUTES.NOTIFICATION as never)
    }
    const onSettingPress = () => {
        navigation.navigate(ROUTES.SETTING as never)
    }
    const onTrainerPress = () => {
        navigation.navigate(ROUTES.MY_TRAINER as never)
    }

    const dispatch = useDispatch()

    const logOut =()=>{
        dispatch(userLoggedOut())
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.profileContainer}>
                <View style={{}}>
                    <View style={styles.profileNameBox}>
                        <Text style={styles.profileName}>София</Text>
                        <Text style={styles.profileName}>Шамкина</Text>
                        <Text style={styles.profileId}>ID: 1074</Text>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 130, }}>
                    <Profile_btn onPress={onMyDetailsPress} title='Мои данные' />
                    <Profile_btn title='Мои покупки' />
                    <Profile_btn onPress={onTrainerPress} title='Мой тренер' />
                    <Profile_btn onPress={onNotificationPress} title='Уведомления' />
                    <Profile_btn onPress={onSettingPress} title='Настройки приложения' />
                    <Profile_btn hasIcon={false} />
                    <Profile_btn textStyle={styles.titleBtn} title='Выйти из аккаунта' hasIcon={false} onPress={logOut} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile_Screen