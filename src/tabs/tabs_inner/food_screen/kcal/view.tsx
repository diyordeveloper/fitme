import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderComponents from '../../../../components/header/header'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view'

const Kca_lScreen = () => {

    const navigation = useNavigation()

    const onConsumptionPress = ()=>{
        navigation.navigate(ROUTES.CONSUMPTION as never)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='2000 ккал' />
            <ScrollView>
                <View style={{ marginBottom: 140, }}>
                    <View style={styles.kcalContainer}>
                        <View style={styles.kcalBox}>
                            <Text style={styles.title}>Белки</Text>
                            <View style={styles.box}>
                                <View style={styles.boxLeft}>
                                    <Text style={styles.text}>3%</Text>
                                </View>
                                <View style={styles.boxRight}>
                                    <Text style={styles.text}>
                                        90гр
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.kcalBox}>
                            <Text style={styles.title}>Жиры</Text>
                            <View style={styles.box}>
                                <View style={styles.boxLeft}>
                                    <Text style={styles.text}>3%</Text>
                                </View>
                                <View style={styles.boxRight}>
                                    <Text style={styles.text}>
                                        90гр
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.kcalBox}>
                            <Text style={styles.title}>Углеводы</Text>
                            <View style={styles.box}>
                                <View style={styles.boxLeft}>
                                    <Text style={styles.text}>3%</Text>
                                </View>
                                <View style={styles.boxRight}>
                                    <Text style={styles.text}>
                                        90гр
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.planContainer}>
                        <TouchableOpacity style={styles.planBox}>
                            <Text style={styles.planText}>План 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.planBoxOne}>
                            <Text style={styles.planTitle}>План 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.planBoxOne}>
                            <Text style={styles.planTitle}>План 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.planBoxOne}>
                            <Text style={styles.planTitle}>План 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.planBoxOne}>
                            <Text style={styles.planTitle}>План 5</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.receptionContainer}>
                        <TouchableOpacity style={styles.receptionBox}>
                            <Text style={styles.planText}>1-Прием</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.planBoxOne}>
                            <Text style={styles.planTitle}>2-Прием</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.planBoxOne}>
                            <Text style={styles.planTitle}>3-Прием</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.planBoxOne}>
                            <Text style={styles.planTitle}>4-Прием</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.planBoxOne}>
                            <Text style={styles.planTitle}>5-Прием</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.generalContainer}>
                        <View style={styles.generalBox}>
                            <Text style={styles.title}>Творог 5% </Text>
                            <Text style={styles.textRed}>200 гр</Text>
                        </View>
                        <View style={styles.generalBox}>
                            <Text style={styles.title}>Творог 5% </Text>
                            <Text style={styles.textRed}>200 гр</Text>
                        </View>
                        <Text style={styles.generalText}>Общие Ккал: 3000</Text>
                    </View>
                    <Bottom_Auth onPress={onConsumptionPress} style={styles.btn} textStyle={styles.btnText} text='Добавить в пищевой дневник' />
                    <View style={styles.recommendationsBox}>
                        <Text style={styles.recommendationsText}> Как приготовить</Text>
                        <TextInput multiline={false} style={styles.input} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Kca_lScreen