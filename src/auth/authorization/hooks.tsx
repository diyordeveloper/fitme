import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { requests } from "../../api/request";
import { ROUTES } from "../../navigation/ROUTES";

export const AuthorizationHooks = () => {
    const navigation = useNavigation<any>()

    const [phonenumber, setPhonenumber] = useState('+998998595937');

    const [error, setError] = useState<any>();

    const onRegisterPress = () => { navigation.navigate(ROUTES.REGISTRATION as never) };

    const onPhoneChange = (e: string) => {
        if (error) {
            setError({});
        }
        setPhonenumber(e);
    };

    const onConfirmationPress = async () => {
        // navigation.navigate(ROUTES.NUMBER_CONFIRMATION as never)
        try {
            console.log({ phonenumber });
            let res = await requests.auth.login({ phonenumber });
            console.log(res.data);
            navigation.navigate(ROUTES.NUMBER_CONFIRMATION, { phonenumber })
        } catch (err) {
            setError(err)
            console.log(err, "sdadas");
        }

    }
    return { onRegisterPress, setPhonenumber: onPhoneChange, onConfirmationPress, phonenumber, };

}
