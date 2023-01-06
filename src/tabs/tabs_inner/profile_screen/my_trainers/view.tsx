import { View, Text, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Tab_One from '../../../../components/tabs_header/tab_one/tab_one'
import Search_Component from '../../../../components/search_component/search_component'
import Trainers_Box from '../../../../components/trainers_box/trainers_box'
import { TrainersHooks } from './hooks'
import SafeAreaView from 'react-native-safe-area-view'

const My_TrainersScreen = () => {
    const { data, navigation } = TrainersHooks();
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='Мой тренер' />
            <Tab_One
                titleList={['Мужчины', 'Женщины']}
                tab_one={
                    <View style={{ marginBottom: 70, }}>
                        {data.map((item) => {
                            return (
                                <Trainers_Box
                                    onPress={() => navigation.navigate(item.screenPath as never)}
                                    name={item.name}
                                    work={item.work}
                                    live={item.live}
                                    old={item.old}
                                    year={item.year}
                                    imgUrl={item.imgUrl}
                                />
                            )
                        })}
                    </View>
                }
            />
        </View>
    )
}

export default My_TrainersScreen