import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../../../../navigation/ROUTES";

export const PaidHooks = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate(ROUTES.PAYMENT as never)
    }
    return { onPress }
}