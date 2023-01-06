import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'
import { LeftIcon } from '../../assets/icon/24px'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../navigation/ROUTES'

interface Props {
    title?: string,
    bottom?: boolean,
    text?: any,
}

const HeaderComponents = ({ title, bottom = false, text }: Props) => {
    const navigation = useNavigation();
    const goBackPress = () => {
        navigation.goBack()
    }
    const onPress = () => {
        navigation.navigate(ROUTES.RECOMMEND as never)
    }
    return (
        <View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <TouchableOpacity onPress={goBackPress} activeOpacity={0.8} style={styles.container}>
                    <View style={styles.btn}>
                        <LeftIcon />
                    </View>
                    <Text style={styles.text}>Назад</Text>
                </TouchableOpacity>
                {bottom
                    ?
                    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.rightBtn}>
                        <Text style={styles.title}>
                            {text}
                        </Text>
                    </TouchableOpacity>
                    : null}
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>

    )
}

export default HeaderComponents

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    header: {
        marginTop: 10,
        marginHorizontal: 25,
        marginBottom: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.WHITE
    },
    rightBtn: {
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        width: 113,
        height: 37,
        marginRight: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: COLORS.WHITE,
        fontWeight: '400',
        fontSize: 11,
        textAlign: 'center',
    },
})