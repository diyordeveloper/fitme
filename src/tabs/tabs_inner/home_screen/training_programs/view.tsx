import { View, Text, ScrollView, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Tab_One from '../../../../components/tabs_header/tab_one/tab_one'
import Tab_Training from '../../../../components/tabs_header/tabs_training/tab_training'
import { TrainingHooks } from './hooks'
import BoxComponents from '../../../../components/home_components/box_components'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view'

const Training_Programs = () => {
  const { data } = TrainingHooks();

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(ROUTES.INDIVIDUAL as never)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponents title='Программы тренировок' />
      <Tab_One
        titleList={['Мужчины', 'Женщины']}
        tab_one={
          <>
            <Tab_Training
              tab_one={
                <View style={{}}>
                  <ScrollView>
                    <View style={{ marginBottom: 120, }}>
                      <View style={{ marginHorizontal: 25, marginTop: 10, }}>
                        <Text style={{ color: '#fff', textAlign: 'center', }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </View>
                      {data.map((item) => {
                        return (
                          <BoxComponents
                            onPress={() => navigation.navigate(item.screenPath as never)}
                            text={item.text} title={item.name} name={item.title} imgUrl={item.imageUrl} />
                        )
                      })}
                    </View>
                  </ScrollView>
                  <View style={styles.bottom}>
                    <Bottom_Auth onPress={onPress} text='Заказать Программу ( индивидуальную )' />
                  </View>
                </View>
              }
            />
          </>
        }
      />
    </View>
  )
}

export default Training_Programs