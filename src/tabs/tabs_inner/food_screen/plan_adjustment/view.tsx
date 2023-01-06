import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderComponents from '../../../../components/header/header'
import Input_150 from '../../../../components/Input_conponents/input_150'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import SafeAreaView from 'react-native-safe-area-view';


const Plan_Adjustment_Screen = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='План 1 ( Корректировка )' />
            <ScrollView>
                <View style={{ marginBottom: 130, }}>
                    <View style={styles.inputContainer}>
                        <Input_150 inputView={false} style={styles.input} title='Целевые Ккал' />
                        <Input_150 inputView={false} style={styles.inputOne} title='Б' />
                        <Input_150 inputView={false} style={styles.inputOne} title='Ж' />
                        <Input_150 inputView={false} style={styles.inputOne} title='У' />
                    </View>
                    <View style={styles.inputColorContainer}>
                        <Input_150 inputView={false} style={styles.inputColo} title='Фактические Ккал' />
                        <Input_150 inputView={false} style={styles.inputColorOne} title='Б' />
                        <Input_150 inputView={false} style={styles.inputColorOne} title='Ж' />
                        <Input_150 inputView={false} style={styles.inputColorOne} title='У' />
                    </View>
                    <View style={styles.footerContainer}>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>1-й Приём</Text>
                            </TouchableOpacity>
                            <Text style={styles.boxText}>Изменить</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.textBox}>
                                <Text style={styles.title}>Творог 5%</Text>
                                <Text style={styles.title}>Творог 5%</Text>
                            </View>
                            <View style={styles.textBox}>
                                <TouchableOpacity>
                                    <Text style={styles.textRed}>200 гр</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.textRed}>200 гр</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>2-й Приём</Text>
                            </TouchableOpacity>
                            <Text style={styles.boxText}>Изменить</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.textBox}>
                                <Text style={styles.title}>Творог 5%</Text>
                                <Text style={styles.title}>Творог 5%</Text>
                            </View>
                            <View style={styles.textBox}>
                                <TouchableOpacity>
                                    <Text style={styles.textRed}>200 гр</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.textRed}>200 гр</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>3-й Приём</Text>
                            </TouchableOpacity>
                            <Text style={styles.boxText}>Изменить</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.textBox}>
                                <Text style={styles.title}>Творог 5%</Text>
                                <Text style={styles.title}>Творог 5%</Text>
                            </View>
                            <View style={styles.textBox}>
                                <TouchableOpacity>
                                    <Text style={styles.textRed}>200 гр</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.textRed}>200 гр</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Bottom_Auth style={{ marginTop: 40, marginHorizontal: 40, }} text='Сохранить' />
                </View>
            </ScrollView>
        </View>
    )
}

export default Plan_Adjustment_Screen