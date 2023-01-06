import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import { XIcon } from "../../assets/icon/24px";
import { ROUTES } from "../../navigation/ROUTES";
import { COLORS } from "../../themes/constants"
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
    inputText: string,
}

const Modal_one = ({ headerText, title, text, onPress = () => { }, Press = () => { }, style, hasTitle = false, inputText }: Props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()

    const onRecommendPress = () => {
        if (isModalVisible) {
            navigation.navigate(ROUTES.RECOMMEND as never)
            setModalVisible(false)
        }
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{}}>
            <View>
                <View style={styles.border}/>
                <Input_150 style={[styles.btn, style]} onPress={toggleModal} touch={false} title={inputText} />
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.view}>
                    <View style={styles.modalContainer}>
                        <View style={styles.flex}>
                            <View style={{ flex: 0.8, justifyContent: 'space-between' }}>
                                <Text style={styles.text}>
                                    {headerText}
                                </Text>
                                {hasTitle ? <Text style={styles.title}>от 200 до 500 ккал</Text> : null}
                            </View>
                            <TouchableOpacity onPress={toggleModal} style={{}}>
                                <XIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.flex}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} />
                                <View style={{ marginLeft: 10, }}>
                                    <Text style={styles.title}>{text}</Text>
                                </View>
                            </View>

                            <View style={{ flex: 1, justifyContent: "center", }}>
                                <Text style={styles.title}>
                                    {title}
                                </Text>
                            </View>


                        </View>
                        <View style={styles.flex}>
                            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', }}>
                                <TouchableOpacity onPress={onRecommendPress} style={styles.touch}>
                                    <Text style={styles.touchText}>
                                        Развёрнутые
                                        рекомендации
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onPress} style={styles.touchOne}>
                                    <Text style={styles.touchText}>
                                        Ок
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Modal_one;

const styles = StyleSheet.create({
    btn: {
        width: 107,
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
        height: 200,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.WHITE,
    },
    title: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    input: {
        flex: 1,
        color: COLORS.WHITE,
    },
    inputContainer: {
        flex: 0.8,
        marginRight: 15,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    touch: {
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        width: 113,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    touchOne: {
        backgroundColor: COLORS.RED,
        width: 100,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    touchText: {
        textAlign: 'center',
        fontSize: 11,
        fontWeight: "400",
        color: COLORS.WHITE,
    },
    border:{
        borderWidth: 1,
        borderColor:'#252525',
        width: 30,
        bottom: '25%',
        zIndex:1,
        position:'absolute',
        backgroundColor:'red',
        left: '20%',
    },
})
