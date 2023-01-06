import { useNavigation } from "@react-navigation/native";
import React from "react";

export const PaymentHooks = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack()
    }
    return {goBack}
}