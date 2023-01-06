import { View, Text, TouchableOpacity, LayoutAnimation, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { DownIcon, FacebookIcon, GoogleIcon, UpIcon } from '../../assets/icon/24px';
import { COLORS } from '../../themes/constants';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigation/ROUTES';


interface Props {
    title?: string,
    onPress?: any,
}


const Workout_Animated = ({ title, }: Props) => {
    const [shouldShow, setShouldShow] = useState(true);
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate(ROUTES.BENCH_PRESS as never)
    }
    const Press = () => {
        navigation.navigate(ROUTES.WORKOUT_THREE as never)
    }
    return (
        <View style={styles.one}>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.animated}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                LayoutAnimation.configureNext(
                                    LayoutAnimation.Presets.easeInEaseOut,
                                );
                                setShouldShow(!shouldShow);
                            }}
                            style={styles.header}>
                            <Text style={styles.headerText}>{title}</Text>
                            {!shouldShow ? <UpIcon /> : <DownIcon />}
                        </TouchableOpacity>
                        <View style={styles.headerOne}>
                            <Text style={styles.headerOneText}>Сеты</Text>
                        </View>
                    </View>
                    <View style={{}}>

                        {!shouldShow ? (
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <View style={styles.footerContainer}>
                                            <TouchableOpacity onPress={onPress} style={styles.footerOne}>
                                                <Text style={styles.footerText}>
                                                    Горизонтальная тяга
                                                    широким хватом
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.footerContainer}>
                                            <TouchableOpacity onPress={onPress} style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.footerContainer}>
                                            <TouchableOpacity onPress={onPress} style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={styles.footerContainer}>
                                            <View style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.footerContainer}>
                                            <View style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={styles.footerContainer}>
                                            <View style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.footerContainer}>
                                            <View style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.footerContainer}>
                                            <View style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.footerContainer}>
                                            <View style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.footerContainer}>
                                            <View style={styles.footer}>
                                                <Text style={styles.footerText}>
                                                    Жим лежа
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 70, borderLeftWidth: 1, borderColor: COLORS.DARK }]}>
                                            <Text style={styles.text}>
                                                3-80-10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ) : null}
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.headerTwo}>
                                <Text style={styles.headerTwoText}>Неделя 1</Text>
                            </View>


                            <View style={styles.headerTwo}>
                                <Text style={styles.headerTwoText}>Неделя 2</Text>
                            </View>


                            <View style={styles.headerTwo}>
                                <Text style={styles.headerTwoText}>Неделя 3</Text>
                            </View>


                            <View style={styles.headerTwo}>
                                <Text style={styles.headerTwoText}>Неделя 4</Text>
                            </View>


                            <View style={styles.headerTwo}>
                                <Text style={styles.headerTwoText}>Неделя 5</Text>
                            </View>

                        </View>
                        {!shouldShow ? (
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.footerContainer}>
                                        <TouchableOpacity onPress={Press} activeOpacity={0.7} style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <TouchableOpacity onPress={Press} activeOpacity={0.7} style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <TouchableOpacity onPress={Press} activeOpacity={0.7} style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={styles.footerContainer}>
                                        <TouchableOpacity onPress={Press} activeOpacity={0.7} style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <TouchableOpacity onPress={Press} activeOpacity={0.7} style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <TouchableOpacity onPress={Press} activeOpacity={0.7} style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={[styles.footerOne, { width: 90, borderRightWidth: 1, borderColor: COLORS.DARK, }]}>
                                            <Text style={styles.text}>
                                                4/10
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        ) : null}
                    </View>

                </ScrollView>
            </View >
        </View>
    )
}

export default Workout_Animated

const styles = StyleSheet.create({
    animated: {
        backgroundColor: '#1C1C1C',
        overflow: 'hidden',
        borderRightWidth: 1,
        borderColor: COLORS.DARK,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        width: 140,
        height: 35,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        paddingLeft: 10,
    },
    headerText: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.WHITE,
    },
    headerOne: {
        width: 70,
        // borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: COLORS.DARK,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.TABS_COLOR,
        height: 35,
    },
    headerOneText: {
        color: COLORS.GREEN,
        fontSize: 14,
        fontWeight: '700',
    },
    headerTwo: {
        width: 90,
        height: 35,
        borderRightWidth: 1,
        borderColor: COLORS.DARK,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.TABS_COLOR,
    },
    headerThree: {
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTwoText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    footerText: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    footerContainer: {
        borderBottomWidth: 1,
        borderColor: COLORS.DARK,
        backgroundColor: "#121212"
    },
    footerContainerOne: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.DARK,
    },
    footerOne: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 140,
    },
    one: {
        borderTopLeftRadius: 10,
        overflow: 'hidden',
        marginLeft: 20,
    },
    scrollInner: {
    },
})