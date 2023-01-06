import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderComponents from '../../../../components/header/header'
import Tab_One_Profile from '../../../../components/tabs_header/tab_one/tab_one_profile'
import Tab_My_Details from '../../../../components/tabs_header/tab_profile_inner/tab_my_details'
import Input_150 from '../../../../components/Input_conponents/input_150'
import { COLORS } from '../../../../themes/constants'
import Product_name from '../../../../components/product_name/product_name'
import Data_component from '../../../../components/data_component/data_component'
import Workout_Animated from '../../../../components/workout_animated/Workout_Animated'
import Modal_dynamics from '../../../../components/Modal_dynamics/modal_dynamics'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import SafeAreaView from 'react-native-safe-area-view'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import Tab_Data from '../../../../components/tabs_header/tab_data/tab_data'

const My_Details_Screen = () => {
  const navigation = useNavigation()
  const onRecommendPress = () => {
    navigation.navigate(ROUTES.RECOMMEND as never)
  }
  const onConsumptionPress = () => {
    navigation.navigate(ROUTES.CONSUMPTION as never)
  }
  const onPress = () => {
    navigation.navigate(ROUTES.WORKOUT_THREE as never)
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponents title='Мои данные' />
      <Tab_One_Profile
        titleList={['Мои замеры', 'Моё питание', 'Мой тренинг']}
        tab_one={
          <View style={{ marginTop: 30, }}>
            <Modal_dynamics />

            <Bottom_Auth
              style={{
                backgroundColor:
                  COLORS.BLACK, borderWidth: 1,
                borderColor: COLORS.WHITE,
                marginHorizontal: 40,
                borderStyle: 'dashed',
                marginTop: 40,
              }}
              text='Добавить строку'
            />
          </View>
        }
        tab_two={
          <Tab_My_Details
            tab_one={
              <Tab_Data
                tab_one={

                  // <View style={{ marginTop: 30, }}>
                  //   <Modal_dynamics />

                  //   <Bottom_Auth
                  //     style={{
                  //       backgroundColor:
                  //         COLORS.BLACK, borderWidth: 1,
                  //       borderColor: COLORS.WHITE,
                  //       marginHorizontal: 40,
                  //       borderStyle: 'dashed',
                  //       marginTop: 40,
                  //     }}
                  //     text='Добавить строку'
                  //   />
                  // </View>
                  <View style={{ marginBottom: 100, }}>

                    <View style={styles.inputContainer}>
                      <Input_150 title='Дефицитная норма Ккал' />
                      <Input_150 style={styles.input} title='Б' />
                      <Input_150 style={styles.input} title='Ж' />
                      <Input_150 style={styles.input} title='У' />
                    </View>

                    <View style={[styles.inputContainer, { backgroundColor: COLORS.BLACK_TWO, paddingBottom: 15, }]}>
                      <Input_150 style={{ backgroundColor: '#232323' }} title='Дефицитная норма Ккал' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Б' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Ж' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='У' />
                    </View>
                    <Product_name onPressTwo={onConsumptionPress} hasButton={false} />
                  </View>
                }
                tab_two={
                  <View style={{ marginBottom: 100, }}>

                    <View style={styles.inputContainer}>
                      <Input_150 title='Дефицитная норма Ккал' />
                      <Input_150 style={styles.input} title='Б' />
                      <Input_150 style={styles.input} title='Ж' />
                      <Input_150 style={styles.input} title='У' />
                    </View>

                    <View style={[styles.inputContainer, { backgroundColor: COLORS.BLACK_TWO, paddingBottom: 15, }]}>
                      <Input_150 style={{ backgroundColor: '#232323' }} title='Дефицитная норма Ккал' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Б' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Ж' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='У' />
                    </View>
                    <Product_name />
                  </View>
                }
                tab_three={
                  <View style={{ marginBottom: 100, }}>

                    <View style={styles.inputContainer}>
                      <Input_150 title='Дефицитная норма Ккал' />
                      <Input_150 style={styles.input} title='Б' />
                      <Input_150 style={styles.input} title='Ж' />
                      <Input_150 style={styles.input} title='У' />
                    </View>

                    <View style={[styles.inputContainer, { backgroundColor: COLORS.BLACK_TWO, paddingBottom: 15, }]}>
                      <Input_150 style={{ backgroundColor: '#232323' }} title='Дефицитная норма Ккал' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Б' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Ж' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='У' />
                    </View>
                    <Product_name />
                  </View>
                }

              />
            }
            tab_two={
              <Tab_Data
                tab_one={
                  <View style={{ marginBottom: 100, }}>

                    <View style={styles.inputContainer}>
                      <Input_150 title='Дефицитная норма Ккал' />
                      <Input_150 style={styles.input} title='Б' />
                      <Input_150 style={styles.input} title='Ж' />
                      <Input_150 style={styles.input} title='У' />
                    </View>

                    <View style={[styles.inputContainer, { backgroundColor: COLORS.BLACK_TWO, paddingBottom: 15, }]}>
                      <Input_150 style={{ backgroundColor: '#232323' }} title='Дефицитная норма Ккал' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Б' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Ж' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='У' />
                    </View>
                    <Product_name onPressTwo={onConsumptionPress} hasButton={false} />
                  </View>
                }
                tab_two={
                  <View style={{ marginBottom: 100, }}>

                    <View style={styles.inputContainer}>
                      <Input_150 title='Дефицитная норма Ккал' />
                      <Input_150 style={styles.input} title='Б' />
                      <Input_150 style={styles.input} title='Ж' />
                      <Input_150 style={styles.input} title='У' />
                    </View>

                    <View style={[styles.inputContainer, { backgroundColor: COLORS.BLACK_TWO, paddingBottom: 15, }]}>
                      <Input_150 style={{ backgroundColor: '#232323' }} title='Дефицитная норма Ккал' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Б' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Ж' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='У' />
                    </View>
                    <Product_name />
                  </View>
                }
                tab_three={
                  <View style={{ marginBottom: 100, }}>

                    <View style={styles.inputContainer}>
                      <Input_150 title='Дефицитная норма Ккал' />
                      <Input_150 style={styles.input} title='Б' />
                      <Input_150 style={styles.input} title='Ж' />
                      <Input_150 style={styles.input} title='У' />
                    </View>

                    <View style={[styles.inputContainer, { backgroundColor: COLORS.BLACK_TWO, paddingBottom: 15, }]}>
                      <Input_150 style={{ backgroundColor: '#232323' }} title='Дефицитная норма Ккал' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Б' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Ж' />
                      <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='У' />
                    </View>
                    <Product_name />
                  </View>
                }

              />

            }
            tab_three={
              <View style={{ marginBottom: 100, }}>
                <View style={{
                  backgroundColor:
                    COLORS.BLACK_TWO,
                  height: 300,
                  marginHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.WHITE }}>Calendar !</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Input_150 title='Дефицитная норма Ккал' />
                  <Input_150 style={styles.input} title='Б' />
                  <Input_150 style={styles.input} title='Ж' />
                  <Input_150 style={styles.input} title='У' />
                </View>

                <View style={[styles.inputContainer, { backgroundColor: COLORS.BLACK_TWO, paddingBottom: 15, }]}>
                  <Input_150 style={{ backgroundColor: '#232323' }} title='Дефицитная норма Ккал' />
                  <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Б' />
                  <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='Ж' />
                  <Input_150 style={[styles.input, { backgroundColor: '#232323', }]} title='У' />
                </View>
                <Product_name hasButton={false} />
              </View>
            }
          />
        }
        tab_three={
          <View>
            <Workout_Animated onPress={onPress} title='Тренировка 1' />
            <View style={{ marginVertical: 10, }}>
              <Workout_Animated onPress={onPress} title='Тренировка 2' />
            </View>
            <Workout_Animated onPress={onPress} title='Тренировка 3' />
            <View style={styles.footerBox}>
              <TouchableOpacity style={styles.box}>
                <Text style={[styles.text, { color: '#fff' }]}>Неделя 1-4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.text}>Неделя 5-9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.text}>Неделя 10-13</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.yellow}>В ПРОЦЕССЕ...</Text>
          </View>
        }
      />

    </View>
  )
}

export default My_Details_Screen