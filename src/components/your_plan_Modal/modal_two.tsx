import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import { XIcon } from "../../assets/icon/24px";
import { ROUTES } from "../../navigation/ROUTES";
import { COLORS } from "../../themes/constants"
import Bottom_Auth from "../bottom_auth/Bottom_Auth";
import Input_150 from "../Input_conponents/input_150";



const Your_Plan_Modal_Two = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={{}}>
            <Text style={styles.text}>Ккал</Text>
            <TouchableOpacity onPress={toggleModal} style={styles.btn}>
                <View style={styles.inputWidth} />
                <View style={styles.inputCenter} />
                <View style={styles.inputWidth} />
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.view}>
                    <View style={styles.modalContainer}>
                        <View style={{ alignItems:'flex-end',}}>
                            <TouchableOpacity onPress={toggleModal}>
                                <XIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 10,  flexDirection: 'row', justifyContent:'space-between', }}>
                            <View>
                                <Text style={styles.textModal}>%</Text>
                                <TextInput placeholder="-----" placeholderTextColor={'#393939'} style={styles.input} />
                            </View>
                            <View>
                                <Text style={styles.textModal}>гр</Text>
                                <TextInput style={styles.input} />
                            </View>
                        </View>
                       <View style={{alignItems:'center',}}>
                            <Bottom_Auth textStyle={{fontSize: 11,}} style={styles.bottom} text='Ок' />
                       </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Your_Plan_Modal_Two;

const styles = StyleSheet.create({
    btn: {
        width: 85,
        height: 50,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingHorizontal: 5,
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: COLORS.BLACK_TWO,
        width: 328,
        height: 200,
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
        fontSize: 12,
        fontWeight: "600",
        color: COLORS.WHITE,
        textAlign:'center',
        marginVertical: 10,
    },
    input: {
        height: 45,
        width: 130,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        textAlign:'center',
    },
    bottom: {
        width: 100,
        height: 40,
        marginTop: 25,
    },
    inputCenter: {
        height: '100%',
        borderWidth: 0.7,
        borderColor: '#353535',
    },
    inputWidth: {
        width: 25,
        height: 1,
        borderWidth: 0.7,
        borderColor: '#353535',
    },
})
