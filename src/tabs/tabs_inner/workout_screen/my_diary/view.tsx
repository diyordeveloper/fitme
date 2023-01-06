import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Tab_My_Diary from '../../../../components/tabs_header/tabs_my_diary/tabs_my_diary'
import Workout_Animated from '../../../../components/workout_animated/Workout_Animated'
import Status_Modal from '../../../../components/workout_animated/status_moadl'
import BoxComponents from '../../../../components/home_components/box_components'
import { Hooks } from './hooks'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import Tab_One from '../../../../components/tabs_header/tab_one/tab_one'
import Tab_Exercises from '../../../../components/tabs_header/tab_exercises/tab_exercises'
import Tab_Footer from '../../../../components/tabs_header/tab_exercises/tab_footer'
import SafeAreaView from 'react-native-safe-area-view'

const My_DiaryScreen = () => {

    const [state, setState] = useState(true)
    const { data, navigation, onPress, onWorkThreePress } = Hooks();

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Tab_My_Diary
                tab_one={
                    <>
                        <View style={{ marginBottom: 12, }}>
                            <Text style={styles.headerText}>Фулл-бади</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ marginBottom: 80, }}>
                                <Workout_Animated onPress={onWorkThreePress} title='Тренировка 1' />
                                <View style={{ marginVertical: 7, }}>
                                    <Workout_Animated title='Тренировка 2' />
                                </View>
                                <Workout_Animated onPress={onWorkThreePress} title='Тренировка 3' />

                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: 10, }}>
                                    <TouchableOpacity onPress={() => setState(state)} activeOpacity={0.7} style={styles.btn}>
                                        <Text style={!state ? styles.btnText : styles.text}>Неделя 1-4</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                                        <Text style={styles.btnText}>Неделя 5-9</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                                        <Text style={styles.btnText}>Неделя 10-13</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 20, alignItems: 'flex-start', }}>
                                    <Status_Modal />
                                </View>
                            </View>

                        </ScrollView>
                    </>
                }
                tab_two={
                    <>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ marginBottom: 120, }}>
                                {data.map((item) => {
                                    return (
                                        <BoxComponents
                                            circle={true}
                                            onPress={() => navigation.navigate(item.screenPath as never)}
                                            text={item.text} title={item.name} name={item.title} imgUrl={item.imageUrl} />
                                    )
                                })}
                            </View>
                        </ScrollView>
                        <View style={[styles.bottom,{bottom: 30,}]}>
                            <Bottom_Auth onPress={onPress} text='Составить свою программу' />
                        </View>
                    </>
                }
                tab_three={
                    <Tab_One
                        titleList={['Выбранные', 'Выбрать из общей базы']}
                        tab_one={
                            <View style={{ marginTop: 15, flex: 1, }}>
                                <Tab_Exercises
                                    tab_one={
                                        <Tab_Footer
                                            titleList={['Верх груди', 'Середина груди', 'Низ груди']}
                                            tab_one={
                                                <ScrollView showsVerticalScrollIndicator={false}>
                                                    <View style={{ marginBottom: 60, }}>
                                                        {data.map((item) => {
                                                            return (
                                                                <BoxComponents
                                                                    circle={true}
                                                                    title={item.name}
                                                                    text={item.text}
                                                                    //  onPress={() => navigation.navigate(item.screenPath as never)} 
                                                                    name={item.title} imgUrl={item.imageUrl} />
                                                            )
                                                        })}
                                                    </View>
                                                </ScrollView>
                                            }
                                        />

                                    }
                                />
                            </View>
                        }
                        tab_two={
                            <View style={{ marginTop: 15, flex: 1, }}>
                                <Tab_Exercises
                                    tab_one={
                                        <Tab_Footer
                                            titleList={['Верх груди', 'Середина груди', 'Низ груди']}
                                            tab_one={
                                                <>
                                                    <ScrollView>
                                                        <View style={{ marginBottom: 120 }}>
                                                            {data.map((item) => {
                                                                return (
                                                                    <BoxComponents
                                                                        activeLeft={true}

                                                                        //  onPress={() => navigation.navigate(item.screenPath as never)} 
                                                                        name={item.title} imgUrl={item.imageUrl} />
                                                                )
                                                            })}
                                                        </View>
                                                    </ScrollView>
                                                    <View style={styles.bottom}>
                                                        <Bottom_Auth text='Добавить в  “ Выбранные “' />
                                                    </View>
                                                </>
                                            }
                                        />

                                    }
                                />
                            </View>
                        }

                    />
                }
            />
        </View>
    )
}

export default My_DiaryScreen