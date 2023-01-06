import { View, Text, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Tab_One from '../../../../components/tabs_header/tab_one/tab_one'
import Search_Component from '../../../../components/search_component/search_component'
import Trainers_Box from '../../../../components/trainers_box/trainers_box'
import { TrainersHooks } from './hooks'
import SafeAreaView from 'react-native-safe-area-view'


const TrainersScreen = () => {
    const { trainers, women, onCoachesPress } = TrainersHooks();
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='Тренеры' />
            <Search_Component />
            <Tab_One
                titleList={['Мужчины', 'Женщины']}
                tab_one={
                    <View style={{ marginBottom: 70, }}>
                        {trainers.map((item: { name: string | undefined; speciality: string | undefined; city: string | undefined; age: string | undefined; experience: string | undefined; image: any }) => {
                            return (
                                <Trainers_Box
                                    onPress={() => onCoachesPress(item)}
                                    name={item.name}
                                    work={item.speciality}
                                    live={item.city}
                                    old={item.age}
                                    year={item.experience}
                                    imgUrl={item.image}
                                />
                            )
                        })}
                    </View>
                }
                tab_two={
                    <View style={{ marginBottom: 70, }}>
                        {women.map((item: { name: string | undefined; speciality: string | undefined; city: string | undefined; age: string | undefined; experience: string | undefined; image: any }) => {
                            return (
                                <Trainers_Box
                                    onPress={() => onCoachesPress(item)}
                                    name={item.name}
                                    work={item.speciality}
                                    live={item.city}
                                    old={item.age}
                                    year={item.experience}
                                    imgUrl={item.image}
                                />
                            )
                        })}
                    </View>
                }
            />
        </View>
    )
}

export default TrainersScreen