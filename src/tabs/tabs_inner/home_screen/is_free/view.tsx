import { View, Text, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import SafeAreaView from 'react-native-safe-area-view'

const Is_Free = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponents title='Фулл бади' />
      <View style={styles.textBox}>
        <Text style={styles.textOne}>
          Описание программы
        </Text>
        <Text style={styles.textTwo}>
          Для достижения видимого результата в тренировках груди важен прогресс рабочих весов. Но чтобы без опаски браться за большие, необходимо укреплять дельтовидные мышцы и верхнюю часть спины, а также идеально соблюдать технику выполнения всех упражнений.
        </Text>
      </View>
      <View style={styles.btnBox}>
        <Bottom_Auth text='Добавить в “ Мои программы ”' />
      </View>
    </View>
  )
}

export default Is_Free