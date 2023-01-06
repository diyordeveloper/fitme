import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { requests } from "../../api/request";
import { userLoggedIn } from "../../store/slices/userSlices";


export const PasswordHooks = () => {
    let route:any = useRoute();
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const dispatch = useDispatch();
    const fourInput = useRef();
    const [loading, setLoading] = useState(false);
    let phone = route.params?.phonenumber

    // four digit code verification input state string
    const [code, setCode] = useState("");
    const onCodeChange = (value: string) => {
        if(code.length === 4){
            setCode('' + value)
        } else {
            setCode(code + value);
        }
    };

    const onSubmit = async () => {
        try {
            setLoading(true);
            let res = await requests.auth.verify({
                verifycode: code,
                phonenumber: route.params?.phonenumber
            });           
            dispatch(userLoggedIn(res.data));
            setLoading(false);
        } catch (error) {
            // console.log(error);
            setLoading(false);
            Alert.alert('EEEEE');
        }
        // navigation.navigate('tabs' as never);
    };

    const navigation = useNavigation();
    return { onCodeChange, firstInput, secondInput, thirdInput, fourInput, code, onSubmit, loading, route, phone, }
}