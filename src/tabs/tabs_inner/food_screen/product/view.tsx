import { View, Text, ScrollView, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Search_Component from '../../../../components/search_component/search_component'
import Tab_Product from '../../../../components/tabs_header/tabs_products/tab_product'
import Tab_Product_My_dishes from '../../../../components/tabs_header/tabs_products/tabs_product_my_dishes'
import Tab_Product_My_Products from '../../../../components/tabs_header/tabs_products/tabs_my_products'
import Add_product_components from '../../../../components/add_product/add_product_components'
import Bottom_Auth from '../../../../components/bottom_auth/Bottom_Auth'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../../../navigation/ROUTES'
import SafeAreaView from 'react-native-safe-area-view';


const Products_Screen = () => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.ADD_MY_DISHES as never)
    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents />
            <Search_Component />
            <Tab_Product
                tab_one={
                    <Tab_Product_My_dishes
                        tab_one={
                            <>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={{ marginBottom: 120 }}>
                                        <Bottom_Auth style={styles.btn} text='Сделать новое блюдо' />
                                        <Add_product_components />
                                        <Add_product_components />
                                        <Add_product_components />
                                    </View>
                                </ScrollView>
                                <View style={styles.bottom}>
                                    <Bottom_Auth onPress={onPress} style={{ marginHorizontal: 40, }} text='Добавить' />
                                </View>
                            </>
                        }
                    />
                }
                tab_two={
                    <Tab_Product_My_Products
                        tab_one={
                            <>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={{ marginBottom: 120 }}>
                                        <Add_product_components />
                                        <Add_product_components />
                                        <Add_product_components />

                                    </View>
                                </ScrollView>
                                <View style={styles.bottom}>
                                    <Bottom_Auth onPress={goBack} style={{ marginHorizontal: 40, }} text='Добавить' />
                                </View>
                            </>
                        }
                    />
                }
            />
        </View>
    )
}

export default Products_Screen