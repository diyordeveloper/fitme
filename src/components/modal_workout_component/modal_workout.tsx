import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { COLORS } from '../../themes/constants'
import Bottom_Auth from '../bottom_auth/Bottom_Auth';
import { XIcon } from '../../assets/icon/24px';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigation/ROUTES';

const windowHeight = Dimensions.get('window').height;

interface Props {
    onPress?: any
    title?: string
    modal?: boolean
    inputModal?: boolean
}

const Modal_workout = ({ onPress = () => { }, title, modal = true, inputModal = true }: Props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [status, setStatus] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation()

    // const onGoPress = navigation.navigate(ROUTES.ADD_EXERCISES as never)

    const Press = () => {
        if (isModalVisible) {
            navigation.navigate(ROUTES.WORKOUT_TWO as never)
            setModalVisible(false)
        }
    }
    const onBenchPress = () => {
        navigation.navigate(ROUTES.BENCH_PRESS as never)
    }

    return (
        <View>
            {modal ?
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <View>
                                <TouchableOpacity onPress={toggleModal} style={{ alignItems: 'flex-end', }}>
                                    <XIcon />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                                <View style={styles.container}>
                                    <Text style={styles.inputText}>Кол-во подходов</Text>
                                    <TextInput style={styles.inputModal} />
                                </View>
                                <View style={styles.container}>
                                    <Text style={styles.inputText}>Кол-во повторений</Text>
                                    <TextInput style={styles.inputModal} />
                                </View>
                            </View>

                            <View style={{ alignItems: 'center', }}>
                                <Bottom_Auth onPress={Press} text='Ок' style={{ width: 100, paddingVertical: 10, }} />
                            </View>

                        </View>
                    </View>
                </Modal>
                :

                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <View>
                                <TouchableOpacity onPress={toggleModal} style={{ alignItems: 'flex-end', }}>
                                    <XIcon />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                                <View style={styles.container}>
                                    <Text style={styles.inputText}>Вес</Text>
                                    <TextInput style={styles.inputModal} />
                                </View>
                                <View style={styles.container}>
                                    <Text style={styles.inputText}>Повтор</Text>
                                    <TextInput style={styles.inputModal} />
                                </View>
                            </View>

                            <View style={{ alignItems: 'center', }}>
                                <Bottom_Auth onPress={Press} text='Ок' style={{ width: 100, paddingVertical: 10, }} />
                            </View>

                        </View>
                    </View>
                </Modal>
            }

            <View style={styles.boxOne}>
                <Text style={styles.text}>1.Жим лежа</Text>
                <TouchableOpacity onPress={toggleModal} style={styles.btnOne}>
                    <Text style={{ color: COLORS.WHITE, fontSize: 13, }}>{title}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onBenchPress} style={styles.btn}>
                    <Text style={styles.btnText}>Техника</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', marginVertical: 20, }}>
                <View style={styles.textBox}>
                    <Text style={styles.textInput}>Вес</Text>
                    <Text style={styles.textInput}>Повтор</Text>
                </View>
                {inputModal ?
                    <View style={styles.inputBox}>
                        <View style={styles.inputOne} />
                        <View style={styles.inputTwo} />
                    </View>
                    :
                    <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={toggleModal} style={styles.inputBox}>
                            <View style={styles.inputOne} />
                            <View style={styles.inputTwo} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.inputBox}>
                            <View style={styles.inputOne} />
                            <View style={styles.inputTwo} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.inputBox}>
                            <View style={styles.inputOne} />
                            <View style={styles.inputTwo} />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

export default Modal_workout

const styles = StyleSheet.create({
    boxOne: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    btnOne: {
        width: 70,
        height: 26,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 13,
        fontWeight: "600",
        color: COLORS.RED,
    },
    btn: {
        width: 111,
        height: 33,
        backgroundColor: COLORS.BLACK,
        borderWidth: 1,
        borderColor: COLORS.RED,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textBox: {
        height: 71,
        paddingRight: 15,
        paddingVertical: 15,
        justifyContent: 'space-between',

    },
    inputBox: {
        width: 64,
        height: 71,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
        overflow: 'hidden',
        paddingHorizontal: 10,

    },
    inputOne: {
        height: '50%',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.DARK,
        color: COLORS.WHITE,
    },
    inputTwo: {
        height: '50%',
        textAlign: 'center',
        color: COLORS.WHITE,
    },
    textInput: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    modalContainer: {
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: COLORS.BLACK_TWO,
        width: 328,
        height: 195,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    inputModal: {
        backgroundColor: '#232323',
        paddingVertical: 10,
        width: 127,
        height: 43,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: COLORS.WHITE,
    },
    inputText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
        marginVertical: 10,
    },
    container: {
        alignItems: 'center',
    },
})