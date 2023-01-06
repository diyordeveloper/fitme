import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import { XIcon } from "../../assets/icon/24px";
import { ROUTES } from "../../navigation/ROUTES";
import { COLORS } from "../../themes/constants"
import Bottom_Auth from "../bottom_auth/Bottom_Auth";
import Input_150 from "../Input_conponents/input_150";



const Your_Plan_Modal = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={{}}>
            <Text style={styles.text}>Ккал</Text>
            <TouchableOpacity onPress={toggleModal} style={styles.btn}></TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.view}>
                    <View style={styles.modalContainer}>
                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.textModal}>
                                От заданного кол-ва калорий
                                будут высчитаваться БЖУ
                            </Text>
                            <TouchableOpacity onPress={toggleModal}>
                                <XIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginHorizontal: 10,marginTop: 20,flexDirection:'row',}}>
                            <TextInput style={styles.input} />
                            <Bottom_Auth style={styles.bottom} text='Ок'/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Your_Plan_Modal;

const styles = StyleSheet.create({
    btn: {
        width: 62,
        height: 50,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: COLORS.BLACK_TWO,
        width: 327,
        height: 141,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    text: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginVertical: 10,
        textAlign: 'center',
    },
    textModal: {
        fontSize: 14,
        fontWeight: "700",
        color: COLORS.WHITE,
    },
    input: {
        height: 50,
        width: 165,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
    },
    bottom:{
        width: 100,
        height: 50,
    },
})
