import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import { XIcon } from "../../assets/icon/24px";
import { ROUTES } from "../../navigation/ROUTES";
import { COLORS } from "../../themes/constants"
import Bottom_Auth from "../bottom_auth/Bottom_Auth";
import Input_150 from "../Input_conponents/input_150";

export interface Props extends TextInputProps {
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    value?: string;
    style?: StyleProp<ViewStyle>;
    title?: string,
    textStyle?: StyleProp<TextStyle>;
    hasTitle?: boolean,
    onPress?: any,
    inputInner?: any,
    headerText?: string,
    text?: string,
    Press?: any,
    inputText?: string,
}

const Modal_two = ({ headerText, title, text, onPress = () => { }, Press = () => { }, style, hasTitle = false, inputText }: Props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const onRecommendPress = () => {
        if (isModalVisible) {
            navigation.navigate(ROUTES.RECOMMEND as never)
            setModalVisible(false)
        }
    }


    return (
        <View style={{}}>
            <TouchableOpacity activeOpacity={0.8} onPress={toggleModal} style={[styles.btn, style]}>
                <Text style={styles.btnText}>Изменить</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.view}>
                    <View style={styles.modalContainer}>
                        <View style={{ alignItems: 'flex-end', padding: 5, }}>
                            <TouchableOpacity onPress={toggleModal}>
                                <XIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} />
                                <Text style={styles.text}>%</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.textOne}>
                                    Уменьшение
                                    дефицитной
                                    калорийности
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.textCenter}>или</Text>
                        <View style={styles.container}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} />
                                <Text style={styles.text}>%</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.textOne}>
                                    Уменьшение
                                    дефицитной
                                    калорийности
                                </Text>
                            </View>
                        </View>
                        <View style={styles.btnContainer}>
                            <Bottom_Auth onPress={onRecommendPress} textStyle={styles.btnWhiteText} style={styles.btnWhite} text={'Развёрнутые рекомендации'} />
                            <Bottom_Auth onPress={toggleModal}  textStyle={styles.btnWhiteText} style={styles.btnRed} text='Ок' />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Modal_two;

const styles = StyleSheet.create({
    btn: {
        width: 90,
        height: 27,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: COLORS.BLACK_TWO,
        width: 327,
        height: 252,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    btnText: {
        fontSize: 11,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    inputContainer: {
        paddingLeft: 10,
        backgroundColor: '#1A1A1A',

        flexDirection: 'row',
        borderRadius: 10,
        alignItems: "center",
        height: 47,
        width: 117,
    },
    input: {
        flex: 1,
        textAlign: 'center',
        color: COLORS.WHITE,
    },
    text: {
        marginHorizontal: 10,
        fontSize: 12,
        color: COLORS.WHITE,
    },
    textContainer: {
        flex: 0.7,
    },
    textOne: {
        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: '700',
    },
    textCenter: {
        color: COLORS.WHITE,
        fontSize: 12,
        marginLeft: '59%',
        marginVertical: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    btnRed: {
        width: 96,
        height: 37,
        marginHorizontal: 0,
    },
    btnWhite: {
        width: 115,
        height: 37,
        backgroundColor: COLORS.BLACK_TWO,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        marginHorizontal: 0,
    },
    btnWhiteText: {
        fontSize: 11,
        fontWeight: '400',
        textAlign: 'center',
    },
})
