import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import { InstagramIcon, TelegramIcon } from '../../../../assets/icon/24px'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { CoachesHooks } from './hooks'
import SafeAreaView from 'react-native-safe-area-view'

const CoachesScreen = () => {
    const { onPress, trainers } = CoachesHooks()
    
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 100, }}>
                    <View style={styles.headerContainer}>
                        <Image style={styles.image} source={{ uri: `${trainers?.item?.image}` }} />
                        <View style={styles.headerRight}>
                            <View>
                                <Text style={styles.textName}>{trainers?.item?.name}</Text>
                                <Text style={styles.textOld}>{trainers?.item?.age} лет </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Text style={styles.textLive}>{trainers?.item?.city}</Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <TouchableOpacity activeOpacity={0.7} style={{ marginRight: 12, }}>
                                        <TelegramIcon />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7}>
                                        <InstagramIcon />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textCart}>Специальность</Text>
                        <TextInput editable={false} placeholderTextColor={'#fff'} placeholder={trainers?.item?.speciality} style={styles.input} />
                        <Text style={styles.textCart}>Образование</Text>
                        <TextInput placeholderTextColor={'#fff'} placeholder={trainers?.item?.formation} style={styles.input} />
                        <Text style={styles.textCart}>Номер телефона</Text>
                        <TextInput placeholderTextColor={'#fff'} placeholder={trainers?.item?.phonenumber} style={styles.input} />
                        <Text style={styles.textCart}>О себе</Text>
                        <View style={styles.input}>
                            <Text style={styles.text}>
                                {trainers?.item?.about}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Оставить заявку</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 20, }}>
                        <Bottom_Auth onPress={onPress} text='Планы питания' />
                    </View>
                    <Bottom_Auth text='Планы тренировок' />
                </View>
            </ScrollView>
        </View>
    )
}

export default CoachesScreen