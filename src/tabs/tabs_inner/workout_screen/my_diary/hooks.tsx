import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../../../../navigation/ROUTES";

export const Hooks = () => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(ROUTES.CREATE_PROGRAM as never)
    }
    const onWorkThreePress = () => {
        navigation.navigate(ROUTES.WORKOUT_THREE as never)
    }

    const data = [
        {
            id: 1,
            title: 'Фулл-бади',
            text: 'Бесплатно',
            name: 'Аркадий Новиков',
            imageUrl: require('../../../../assets/image/Image.png'),
            screenPath: ROUTES.WORKOUT_IS_FREE
        },
        {
            id: 2,
            title: 'Фулл-бади',
            text: 'Бесплатно',
            name: 'Аркадий Новиков',
            imageUrl: require('../../../../assets/image/Image.png'),
            screenPath: ROUTES.WORKOUT_IS_FREE
        },
        {
            id: 3,
            title: 'Фулл-бади',
            text: 'Бесплатно',
            name: 'Аркадий Новиков',
            imageUrl: require('../../../../assets/image/Image.png'),
            screenPath: ROUTES.WORKOUT_IS_FREE,
        },
    ]

    return { data, onPress, navigation, onWorkThreePress }
}