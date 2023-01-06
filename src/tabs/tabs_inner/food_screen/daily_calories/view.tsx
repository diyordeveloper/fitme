import { View, Text,  ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Input_150 from '../../../../components/Input_conponents/input_150'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import Active_border from '../../../../components/active_border/active_border'
import SafeAreaView from 'react-native-safe-area-view';

const Daily_Calories_Screen = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <HeaderComponents
                bottom={true}
                text='Развёрнутые рекомендации'
                title='Расчет вашей суточной нормы калорий'
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 100, }}>
                    <View style={{ marginHorizontal: 20, }}>
                        <Text style={styles.text}>
                            Расчёт вашей суточной нормы калорий, т.е. тех
                            калорий, которые нужны для поддержания того веса,
                            который вы имеете на данный момент. Из этих калорий
                            будет вычитаться то количество калорий (количество дефицита),
                            которое вы укажите далее
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', marginTop: 10, }}>
                        <Input_150 placeholder='-------' style={{ width: 97, height: 46, }} title='Вес натoщак' />
                        <View style={{ alignItems: 'center', paddingVertical: 10, marginHorizontal: 20, }}>
                            <Text style={styles.btnText}>Пол</Text>
                            <View style={{ flexDirection: 'row', paddingVertical: 20, }}>
                                <Bottom_Auth style={styles.btn} textStyle={styles.btnText} text='Муж' />
                                <Bottom_Auth style={styles.btn} textStyle={styles.btnText} text='Жен' />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 20, }}>
                        <Text style={styles.title}>Какой образ жизни вы ведете?</Text>
                        <Active_border title='Мало хожу пешком' />
                        <Active_border title='Тренируюсь 3 раза в неделю. Мало хожу пешком' />
                        <Active_border title='Активный' />
                        <Active_border title='Текст' />
                        <Active_border title='Текст' />
                    </View>
                    <View style={{marginTop: 15,}}>
                        <Input_150 inputView={false} textStyle={styles.title} title='Ваша суточная норма калорий' style={{ width: '90%', }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Daily_Calories_Screen