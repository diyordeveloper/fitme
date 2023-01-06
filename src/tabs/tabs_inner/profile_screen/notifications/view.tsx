import { View, Text,  ScrollView } from 'react-native'
import React from 'react'
import HeaderComponents from '../../../../components/header/header'
import { styles } from './style'
import SafeAreaView from 'react-native-safe-area-view'

const Notifications_Screen = () => {


  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponents title='Уведомления' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 100,}}>
          <View style={styles.box}>
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textRed}>Тренер</Text>
                <Text style={styles.text}>“ Рафаэль Ройтман “ принял</Text>
              </View>
              <Text style={styles.text}>вашу заявку</Text>
            </View>
            <Text style={styles.textData}>10.15.2022</Text>
          </View>
          <View style={styles.box}>
            <View style={{}}>
              <Text style={styles.text}>Вы купили упражнение “ Плечи “</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>за </Text>
                <Text style={styles.textRed}>50.000 сум</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end', }}>
              <Text style={styles.textData}>10.15.2022</Text>
              <Text style={[styles.textRed, { fontWeight: '300', marginTop: 15, }]}>Перейти</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{}}>
              <Text style={styles.text}>Вы купили упражнение “ Плечи “</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>за </Text>
                <Text style={styles.textRed}>"Дневник тренировок "</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end', }}>
              <Text style={styles.textData}>10.15.2022</Text>
              <Text style={[styles.textRed, { fontWeight: '300', marginTop: 15, }]}>Перейти</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{}}>
              <Text style={styles.text}>Вы купили упражнение “ Плечи “</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>за </Text>
                <Text style={styles.textRed}>"Дневник тренировок "</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end', }}>
              <Text style={styles.textData}>10.15.2022</Text>
              <Text style={[styles.textRed, { fontWeight: '300', marginTop: 15, }]}>Перейти</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{}}>
              <Text style={styles.text}>Вы добавили блюдо “ Рис “</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>в</Text>
                <Text style={styles.textRed}>“ Мои продукты “</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end', }}>
              <Text style={styles.textData}>10.15.2022</Text>
              <Text style={[styles.textRed, { fontWeight: '300', marginTop: 15, }]}>Перейти</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{}}>
              <Text style={styles.text}>Вы сделали свой план</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>в</Text>
                <Text style={styles.textRed}>“ Мои планы “</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end', }}>
              <Text style={styles.textData}>10.15.2022</Text>
              <Text style={[styles.textRed, { fontWeight: '300', marginTop: 15, }]}>Перейти</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Notifications_Screen