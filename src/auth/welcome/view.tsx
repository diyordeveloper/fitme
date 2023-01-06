import { View, Text, ScrollView, SafeAreaView, ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { WelcomeHooks } from './hooks';
import Bottom_Auth from '../../components/bottom_auth/Bottom_Auth';
import { COLORS } from '../../themes/constants';

const Component1 = () => {
    return (
        <View>
            <ImageBackground style={styles.imageBack} source={require('../../assets/image/welcome1.png')}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.WHITE, marginVertical: 10, }}>Зачем мне это приложение?</Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.fit}>Fit</Text>
                        <Text style={styles.me}>Me</Text>
                        <Text style={styles.textImage}> - сэкономит вам ДЕНЬГИ и ВРЕМЯ, </Text>
                    </View>
                    <Text style={styles.textImage}>
                        которые люди тратят на малоэффективные методы...
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.fit}>Fit</Text>
                        <Text style={styles.me}>Me</Text>
                        <Text style={styles.textImage}> - это КРУТОЙ ИНСТРУМЕНТ, который </Text>
                    </View>
                    <Text style={styles.textImage}>
                        внесёт ЗНАЧИМЫЙ ВКЛАД в процесс ПРЕОБРАЖЕНИЯ вашего ТЕЛА...
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.fit}>Fit</Text>
                        <Text style={styles.me}>Me</Text>
                        <Text style={styles.textImage}> - это ТРЕНЕР и НУТРИЦИОЛОГ в </Text>
                    </View>
                    <Text style={styles.textImage}>
                        вашем кармане...
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};
const Component2 = () => {
    return (
        <View>
            <ImageBackground style={styles.imageBack} source={require('../../assets/image/welcome2.png')}>
                <View style={{ alignItems: 'center', marginVertical: 10, }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.WHITE, }}>Что я получу используя</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.RED, }} >Fit</Text>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.WHITE, }}>Me?</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textImage}>
                        Доступ к БАЗЕ УПРАЖНЕНИЙ, где подробно показана ТЕХНИКА ВЫПОЛНЕНИЯ  упражнений на все ЧАСТИ ТЕЛА...
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textImage}>
                        ПРОГРАММЫ ТРЕНИРОВОК для мужчин и женщин, для новичков и не только...
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textImage}>
                        ПЛАНЫ ПИТАНИЯ для ЖИРОСЖИГАНИЯ и набора МЫШЕЧНОЙ МАССЫ...
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};
const Component3 = () => {
    return (
        <View>
            <ImageBackground style={styles.imageBack} source={require('../../assets/image/welcome3.png')}>
                <View style={{ alignItems: 'center', marginVertical: 10, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.WHITE, }}>Что ещё даст мне </Text>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.RED, }} >Fit</Text>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.WHITE, }}>Me?</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textImage}>
                        ДНЕВНИК ТРЕНИРОВОК, который является ВАЖНОЙ частью тренировочного процесса и позволяет АНАЛИЗИРОВАТЬ его, тем самым помогая принимать правильные решения в дальнейших действиях...
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textImage}>
                        КОНТРОЛЬ ПИТАНИЯ (Ккал и БЖУ), возможность добиваться поставленной цели не ограничивая себя в каких либо продуктах...
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textImage}>
                        САМОСТОЯТЕЛЬНО определять нужное количество Ккал и БЖУ, составлять себе планы питания из любимых продуктов...
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};
const Component4 = () => {
    return (
        <View>
            <ImageBackground style={styles.imageBack} source={require('../../assets/image/welcome4.png')}>
                <View style={{ alignItems: 'center', marginVertical: 10, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.WHITE, }}>Так же </Text>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.RED, }} >Fit</Text>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.WHITE, }}>Me?</Text>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: COLORS.WHITE, }}> даёт</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textImage}>
                        Возможность заказать ИНДИВИДУАЛЬНУЮ программу тренировок и план питания
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textImage}>
                        Возможность найти себе НАСТАВНИКА, ТРЕНЕРА, который поможет вам в достижении ваших целей...
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.fit}>Fit</Text>
                        <Text style={styles.me}>Me</Text>
                        <Text style={styles.textImage}> создавался для того, чтобы помочь </Text>
                    </View>
                    <Text style={styles.textImage}>
                        пользователю выстроить ГРАМОТНУЮ СТРАТЕГИЮ действий на пути к поставленной цели и получения лучших
                        результатов
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};


const WelcomeScreen = () => {
    const { onPress, showedContent,onAuthorizationPress } = WelcomeHooks();
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {showedContent === 0 ? <Component1 /> : null}
                {showedContent === 1 ? <Component2 /> : null}
                {showedContent === 2 ? <Component3 /> : null}
                {showedContent === 3 ? <Component4 /> : null}
            </View>
            <View style={styles.bottom}>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={[
                            styles.circle,
                            showedContent === 0 ? styles.bgLight2 : styles.bgLight1,
                        ]}
                    />
                    <View
                        style={[
                            styles.circle,
                            showedContent === 1 ? styles.bgLight2 : styles.bgLight1,
                        ]}
                    />
                    <View
                        style={[
                            styles.circle,
                            showedContent === 2 ? styles.bgLight2 : styles.bgLight1,
                        ]}
                    />
                    <View
                        style={[
                            styles.circle,
                            showedContent === 3 ? styles.bgLight2 : styles.bgLight1,
                        ]}
                    />
                </View>
            </View>
            <View style={{ marginVertical: 20, }}>
                <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.btn}>
                    {showedContent === 0 ? <Text style={styles.btnText}>Что я получу используя FitMe?</Text> : null}
                    {showedContent === 1 ? <Text style={styles.btnText}>Что ещё даст мне FitMe?</Text> : null}
                    {showedContent === 2 ? <Text style={styles.btnText}>Так же FitMe даёт</Text> : null}
                    {showedContent === 3 ? <Text style={styles.btnText}>Вперёд к НОВЫМ СВЕРШЕНИЯМ</Text> : null}
                </TouchableOpacity>
            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.text}>Вы уже регистрировались?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAuthorizationPress} activeOpacity={0.8} style={{ borderBottomWidth: 1, borderColor: COLORS.WHITE, marginRight: 25, }}>
                    <Text style={styles.textOne}>Войти</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeScreen