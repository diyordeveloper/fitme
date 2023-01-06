import { View, Text, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import { TrainersHooks } from '../trainers/hooks'
import Search_Component from '../../../../components/search_component/search_component'
import Tab_One from '../../../../components/tabs_header/tab_one/tab_one'
import Trainers_Box from '../../../../components/trainers_box/trainers_box'
import SafeAreaView from 'react-native-safe-area-view'

const Individual_Screen = () => {
    // const { data, navigation } = TrainersHooks();
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='Индивидуальная программа' />
            <View style={styles.box}>
                <Text style={styles.text}>
                  ?
                </Text>
            </View>
            <Search_Component />
            <Tab_One
                titleList={['Мужчины', 'Женщины']}
                tab_one={
                    <View style={{ marginBottom: 70, }}>
                        {/* {data.map((item) => {
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
                        })} */}
                    </View>
                }
            />
        </View>
    )
}

export default Individual_Screen