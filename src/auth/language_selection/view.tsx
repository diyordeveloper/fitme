import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import { styles } from './styles'
import { EnFlagIcon, RusFlagIcon, UzFlagIcon } from '../../assets/icon/24px';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigation/ROUTES';

const LanguageSelectionScreen = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate(ROUTES.WELCOME as never)
    }
    return (
        <View style={styles.container}>

            <ImageBackground style={styles.imageBack} source={require('../../assets/image/BG.png')}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.btn}>
                    <RusFlagIcon />
                    <Text style={styles.btnText}>Русский язык</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                    <EnFlagIcon />
                    <Text style={styles.btnText}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                    <UzFlagIcon />
                    <Text style={styles.btnText}>O’zbek tili</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    )
}

export default LanguageSelectionScreen