import { View, Text, TouchableOpacity,  ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { LeftIcon } from '../../../../assets/icon/24px'
import { PaymentHooks } from './hooks'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import Default_Input from '../../../../components/deafult_input/defauly_input'
import SafeAreaView from 'react-native-safe-area-view'

const PaymentScreen = () => {
    const { goBack } = PaymentHooks();

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goBack} activeOpacity={0.7} style={styles.iconBtn}>
                    <LeftIcon />
                </TouchableOpacity>
                <Text style={styles.headerText}>Оплата</Text>
                <View style={{ width: 40, }} />
            </View>
            <Text style={styles.text}>Добавить карту</Text>
            <View>
                <ScrollView showsHorizontalScrollIndicator={false} style={{ marginVertical: 20, }} horizontal={true}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                        <Image style={styles.uzcard} source={require('../../../../assets/image/Uzcard.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                        <Image style={styles.humo} source={require('../../../../assets/image/Humo.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                        <Image style={styles.visa} source={require('../../../../assets/image/Visa.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                        <Image style={styles.uzcard} source={require('../../../../assets/image/Uzcard.png')} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <ScrollView>
                <View style={styles.centerContainer}>
                    <Default_Input title='Номер карты' />
                    <Default_Input title='Годна до' />
                    <View style={styles.footer}>
                        <Text style={styles.textOne}>Детали оплаты</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.textPayment}>Оплата</Text>
                        <View style={styles.textBox}>
                            <Text style={styles.textPaymentCenter}>ПЛЕЧИ</Text>
                            <Text style={styles.textPayment}>Доступ к упражнениям</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ flex: 1, }}>
                                <Text style={styles.textPayment}>Дата</Text>
                                <Text style={styles.textPaymentCenter}>20 августа 2022 </Text>
                            </View>
                            <View style={{ flex: 1, }}>
                                <Text style={styles.textPayment}>Время</Text>
                                <Text style={styles.textPaymentCenter}>09:30 </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: "center", }}>
                            <Text style={styles.textPayment}>Стоимость</Text>
                            <Text style={styles.textPaymentCenter}>175 000 сум</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 30, }}>
                        <Bottom_Auth text='Оплатить' />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PaymentScreen