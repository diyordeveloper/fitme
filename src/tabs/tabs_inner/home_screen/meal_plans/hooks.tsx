import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../../../../navigation/ROUTES";


export const MealHooks = () => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate(ROUTES.INDIVIDUAL_PROGRAM as never)
    }
    const data = [
        {
            name: 'Аркадий Новиков',
            mony: '50.000 сум',
            belkov: '100гр',
            interest: '20%',
            kcal: '2000 ккал.',

        },
        {
            name: 'Аркадий Новиков',
            mony: '50.000 сум',
            belkov: '100гр',
            interest: '20%',
            kcal: '2000 ккал.',


        },
        {
            name: 'Аркадий Новиков',
            mony: '50.000 сум',
            belkov: '100гр',
            interest: '20%',
            kcal: '2000 ккал.',


        },
        {
            name: 'Аркадий Новиков',
            mony: '50.000 сум',
            belkov: '100гр',
            interest: '20%',
            kcal: '2000 ккал.',


        },
        {
            name: 'Аркадий Новиков',
            mony: '50.000 сум',
            belkov: '100гр',
            interest: '20%',
            kcal: '2000 ккал.',


        },

    ]
    return { data, navigation, onPress }
}