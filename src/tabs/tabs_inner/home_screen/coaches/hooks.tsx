import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../../../../navigation/ROUTES";


export const CoachesHooks = () => {
    const route = useRoute();
    const trainers = route.params
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate(ROUTES.MEAL_PLANS as never)
    }
    return { navigation, onPress, trainers }
}