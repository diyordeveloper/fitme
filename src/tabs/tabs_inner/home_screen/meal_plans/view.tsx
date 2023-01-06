import { View, Text, ScrollView, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Tab_One from '../../../../components/tabs_header/tab_one/tab_one'
import HeaderComponents from '../../../../components/header/header'
import Tab_Two from '../../../../components/tabs_header/tab_two/tab_two'
import BoxComponents from '../../../../components/home_components/box_components'
import { MealHooks } from './hooks'
import Meal_Plans_Component from '../../../../components/meal_plans_component/Meal_Plans_Component'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import SafeAreaView from 'react-native-safe-area-view'
import Tab_Male from '../../../../components/tabs_header/tab_two/tab_male'

const Meal_Plans = () => {

  const { data, onPress } = MealHooks();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponents title='Планы Питания' />
      <View style={{ flex: 1, }}>
        <Tab_One
          titleList={["Жиросжигание", "Массанабор"]}
          tab_one={
            <Tab_Two
              tab_one={
                <View>
                  <ScrollView>
                    <View style={{ marginBottom: 120, }}>
                      {data.map((item) => {
                        return (
                          <Meal_Plans_Component item={item} />
                        )
                      })}

                    </View>
                  </ScrollView>
                  <View style={styles.bottom}>
                    <Bottom_Auth onPress={onPress} text='Заказать План ( индивидуальный )' />
                  </View>
                </View>
              }
            />
          }
          tab_two={
            <Tab_Male
              tab_one={
                <View>
                  <ScrollView>
                    <View style={{ marginBottom: 120, }}>
                      {data.map((item) => {
                        return (
                          <Meal_Plans_Component item={item} />
                        )
                      })}

                    </View>
                  </ScrollView>
                  <View style={styles.bottom}>
                    <Bottom_Auth onPress={onPress} text='Заказать План ( индивидуальный )' />
                  </View>
                </View>
              }
            />
          }
        />
      </View>
    </View>
  )
}

export default Meal_Plans