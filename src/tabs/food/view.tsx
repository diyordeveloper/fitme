import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ROUTES } from '../../navigation/ROUTES'
import { useNavigation } from '@react-navigation/native'
import Tab_Nutrition from '../../components/tabs_header/tabs_nutrition/tabs_nutrition'
import Tab_One from '../../components/tabs_header/tab_one/tab_one'
import My_Plans_Component from '../../components/my_plans_box/My_plans_box'
import Bottom_Auth from '../../components/bottom_auth/Bottom_Auth'
import Tab_my_products from '../../components/tabs_header/tabs_my_products/tab_my_products'
import Add_product_components from '../../components/add_product/add_product_components'
import Tab_Base_products from '../../components/tabs_header/tabs_base_products/tabs_base_products'
import Input_150 from '../../components/Input_conponents/input_150'
import Modal_one from '../../components/modal_nutrition/modal_one'
import Modal_two from '../../components/modal_nutrition/modal_two'
import SafeAreaView from 'react-native-safe-area-view';
import Modal from "react-native-modal";

const Nutrition_Screen = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.DAILY_CALORIES as never)
    }
    const onDynamicsPress = () => {
        navigation.navigate(ROUTES.DYNAMICS as never)
    }
    const onConsumptionPress = () => {
        navigation.navigate(ROUTES.CONSUMPTION as never)
    }
    const onKcalPress = () => {
        navigation.navigate(ROUTES.KCAL as never)
    }
    const onPres = () => {
        navigation.navigate(ROUTES.YOUR_PLAN as never)
    }
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const onRecommendPress = () => {
        if (isModalVisible) {
            navigation.navigate(ROUTES.RECOMMEND as never)
            setModalVisible(false)
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Tab_Nutrition
                tab_one={
                    <Tab_One titleList={['Жиросжигание', 'Массанабор']}
                        tab_one={
                            <ScrollView>
                                <View style={{ marginBottom: 80, }}>
                                    <View style={styles.center}>
                                        <View style={styles.btnContainer}>
                                            <Input_150 placeholder='--------' button={false} onPress={onPress} title='Суточная норма' />
                                            <Modal_one inputText='Кол-во дефицита' title='Кол-во профицита' text='ккал' hasTitle={true} headerText='Рекомендованное кол-во профицита' />
                                            <Input_150 style={styles.btnOne} touch={false} title='В %' />
                                        </View>
                                    </View>
                                    <View style={styles.center}>
                                        <View style={styles.btnContainer}>
                                            <Input_150 title='Дефицитная норма Ккал' />
                                            <Modal_one text='%' title='Кол-во белка' headerText='Рекомендованное кол-во белка от 20% до 30%' inputText='Б' style={styles.btnOne} />
                                            <Modal_one text='%' title='Кол-во белка' headerText='Рекомендованное кол-во белка от 20% до 30%' inputText='Ж' style={styles.btnOne} />
                                            <Input_150 style={styles.btnOne} touch={false} title='У' />
                                        </View>
                                        <View style={{ marginHorizontal: 20, paddingBottom: 20, flexDirection: "row", alignItems: 'center' }}>
                                            <Modal_two />
                                            <Text style={styles.modalText}>Корректировка дефицитной нормы</Text>
                                        </View>
                                    </View>
                                    <View style={styles.center}>
                                        <View style={styles.btnContainer}>
                                            <Input_150 inputView={false} title='Фактические ккал' />
                                            <Input_150 inputView={false} style={styles.btnOne} touch={false} title='Б' />
                                            <Input_150 inputView={false} style={styles.btnOne} touch={false} title='Ж' />
                                            <Input_150 inputView={false} style={styles.btnOne} touch={false} title='У' />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 40, }}>
                                        <Bottom_Auth style={styles.bottom} onPress={onConsumptionPress} textStyle={styles.bottomText} text='+ Еда употребленная за сутки' />
                                        <Bottom_Auth style={styles.bottomOne} onPress={onDynamicsPress} textStyle={styles.bottomTextOne} text='Динамика и Анализ процесса' />
                                    </View>
                                </View>
                            </ScrollView>
                        }
                        tab_two={
                            <ScrollView>
                                <View style={{ marginBottom: 80, }}>
                                    <View style={styles.center}>
                                        <View style={styles.btnContainer}>
                                            <Input_150 placeholder='--------' button={false} onPress={onPress} title='Суточная норма' />
                                            <Modal_one inputText='Кол-во профицита' title='Кол-во дефицита калорий' text='ккал' hasTitle={true} headerText='Рекомендованное кол-во дефицита' />
                                            <Input_150 style={styles.btnOne} touch={false} title='В %' />
                                        </View>
                                    </View>
                                    <View style={styles.center}>
                                        <View style={styles.btnContainer}>
                                            <Input_150 inputText='-----' title='Дефицитная норма Ккал' />
                                            <Modal_one text='%' title='Кол-во белка' headerText='Рекомендованное кол-во белка от 15% до 20%' inputText='Б' style={styles.btnOne} />
                                            <Modal_one text='%' title='Кол-во белка' headerText='Рекомендованное кол-во белка от 20% до 30%' inputText='Ж' style={styles.btnOne} />
                                            <Input_150 style={styles.btnOne} touch={false} title='У' />
                                        </View>
                                        <View style={{ marginHorizontal: 20, paddingBottom: 20, flexDirection: "row", alignItems: 'center' }}>
                                            <Modal_two />
                                            <Text style={styles.modalText}>Корректировка профицитной нормы</Text>
                                        </View>
                                    </View>
                                    <View style={styles.center}>
                                        <View style={styles.btnContainer}>
                                            <Input_150 inputView={false} title='Фактические ккал' />
                                            <Input_150 inputView={false} style={styles.btnOne} touch={false} title='Б' />
                                            <Input_150 inputView={false} style={styles.btnOne} touch={false} title='Ж' />
                                            <Input_150 inputView={false} style={styles.btnOne} touch={false} title='У' />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 40, }}>
                                        <Bottom_Auth style={styles.bottom} onPress={onConsumptionPress} textStyle={styles.bottomText} text='+ Еда употребленная за сутки' />
                                        <Bottom_Auth style={styles.bottomOne} onPress={onDynamicsPress} textStyle={styles.bottomTextOne} text='Динамика и Анализ процесса' />
                                    </View>
                                </View>
                            </ScrollView>
                        }
                    />
                }
                tab_two={
                    <Tab_One titleList={['Жиросжигание', 'Массанабор']}
                        tab_one={
                            <>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={{ marginTop: 20, marginBottom: 100, }}>
                                        <My_Plans_Component onPress={onKcalPress} />
                                        <My_Plans_Component />
                                        <My_Plans_Component />
                                    </View>
                                </ScrollView>
                                <View style={styles.botton}>
                                    <Bottom_Auth onPress={onPres} style={{ marginHorizontal: 40, }} text='Сделать свой план' />
                                </View>
                            </>
                        }
                    />
                }
                tab_three={
                    <Tab_my_products
                        tab_one={
                            <View style={{ marginBottom: 100 }}>
                                <Add_product_components HasTitle={false} />
                                <Add_product_components HasTitle={false} />
                                <Add_product_components HasTitle={false} />
                                <Bottom_Auth onPress={toggleModal} style={{ marginHorizontal: 40, marginTop: 40, }} text='Добавить свой продукт' />
                            </View>

                        }
                    />
                }
                
                tab_Four={
                    <Tab_Base_products
                        tab_Five={
                            <View style={{ marginBottom: 100 }}>
                                <Add_product_components />
                                <Add_product_components />
                                <Bottom_Auth style={{ marginHorizontal: 40, marginTop: 40, }} text='Добавить в “ Мои продукты “' />
                            </View>
                        }
                    />
                }

            />

            <Modal isVisible={isModalVisible}>
                <View style={styles.view}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textHeader}>Добавить свой продукт</Text>
                        <Input_150 textStyle={{ right: '25%', }} title='Название продукта' style={{ backgroundColor: '#232323', width: '95%' }} />
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 10, }}>
                            <Input_150 title='Ккал' style={styles.modalInput} />
                            <Input_150 title='Б' style={styles.modalInputOne} />
                            <Input_150 title='Ж' style={styles.modalInputOne} />
                            <Input_150 title='У' style={styles.modalInputOne} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginHorizontal: 10, }}>
                            <Bottom_Auth onPress={onRecommendPress} text='Развёрнутые рекомендации' textStyle={styles.btnText} style={styles.btnWhite} />
                            <Bottom_Auth text='Добавить' style={{ width: 144, marginHorizontal: 0, height: 45, }} />
                        </View>
                        <Text style={{ color: "#E8E8E8", fontSize: 10, fontWeight: '400', textAlign: "center", }}>Данный продукт, будет добавлен в категорию "Овощи"</Text>
                    </View>

                </View>
            </Modal>
        </View>
    )
}

export default Nutrition_Screen