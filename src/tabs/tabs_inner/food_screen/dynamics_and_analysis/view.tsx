import { View, Text, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Modal_dynamics from '../../../../components/Modal_dynamics/modal_dynamics'
import SafeAreaView from 'react-native-safe-area-view';
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'

const Dynamics_and_Analysis = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents text='Развёрнутые рекомендации' bottom={true} />
            <Modal_dynamics />
            <View style={styles.btnContainer}>
                <Bottom_Auth text='Добавить строку' style={styles.btn} />
            </View>
        </View>
    )
}

export default Dynamics_and_Analysis