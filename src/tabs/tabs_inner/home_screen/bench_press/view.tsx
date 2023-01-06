import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import SafeAreaView from 'react-native-safe-area-view'
import { BenchHooks } from './hook'

const Bench_PressScreen = ({ }) => {

    const { exercise } = BenchHooks()
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title={exercise?.item?.title} />
            <TouchableOpacity activeOpacity={0.7} style={styles.imageBox}>
                <Image style={styles.image} source={require('../../../../assets/image/tr.png')} />
            </TouchableOpacity>
            <View style={styles.box}>
                <Text style={styles.text}>

                </Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>
                    {exercise?.item?.description}
                </Text>
            </View>
        </View>
    )
}

export default Bench_PressScreen