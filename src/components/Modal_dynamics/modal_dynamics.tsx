import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../themes/constants'
import Modal from "react-native-modal";
import Input_150 from '../Input_conponents/input_150';
import { XIcon } from '../../assets/icon/24px';
import Bottom_Auth from '../bottom_auth/Bottom_Auth';

const Modal_dynamics = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModal, setModal] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const onModalPress = () => {
        setModal(!isModal);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <View style={{ flexDirection: 'row', width: 200, marginBottom: 10, }}>
                        <View style={styles.boxOne}>
                            <Text style={styles.text}>Дата</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Вес</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Живот</Text>
                        </View>

                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.boxOne}>
                            <TextInput placeholderTextColor={'#fff'} placeholder='10.12.2022' style={styles.inputOne} />
                        </View>
                        <View style={styles.box}>
                            <TextInput placeholder='-----' style={styles.input} />
                        </View>
                        <View style={styles.box}>
                            <TextInput placeholder='-----' style={styles.input} />
                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={toggleModal} style={styles.btn}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15, }}>
                <Text style={styles.textFooter}> Напомнить о следующем замере</Text>
                <TouchableOpacity onPress={onModalPress}>
                    <Text style={styles.deleteText}>Удалить строку</Text>
                </TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', }}>
                    <View style={styles.modalContainer}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={toggleModal}>
                                <XIcon />
                            </TouchableOpacity>
                        </View>
                        <Input_150 style={styles.inputModal} title='Часть тела' />
                        <View style={{ alignItems: 'center', marginTop: 20, }}>
                            <Bottom_Auth style={styles.btnModal} text='Ок' />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={isModal}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', }}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Вы действительно хотите удалить строку</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <Bottom_Auth onPress={onModalPress} style={styles.deleteBtn} textStyle={styles.textModal} text='Да' />
                            <Bottom_Auth onPress={onModalPress} style={styles.deleteBtn} textStyle={styles.textModal} text='Нет' />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Modal_dynamics

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginHorizontal: 20,
    },
    inputContainer: {
        width: 200,
        height: 45,
        backgroundColor: COLORS.BLACK_TWO,
        flexDirection: 'row',
        borderRadius: 10,
    },
    box: {
        flex: 0.3,
    },
    boxOne: {
        flex: 0.4,
    },
    input: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#353535',
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    inputOne: {
        flex: 1,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.WHITE,
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    btn: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#8E8E8E',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        top: -5,
    },
    btnText: {
        color: '#8E8E8E',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2,
    },
    textFooter: {
        color: COLORS.RED,
        fontSize: 11,
        fontWeight: '700',
    },
    deleteText: {
        color: COLORS.GRAY_ONE,
        fontSize: 11,
        fontWeight: '600',
        marginLeft: 20,
    },
    modalContainer: {
        width: 330,
        height: 200,
        backgroundColor: COLORS.BLACK_TWO,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    inputModal: {
        backgroundColor: '#232323',
    },
    btnModal: {
        width: 96,
        height: 37,
    },
    textModal: {},
    deleteBtn: {
        width: 60,
        backgroundColor: COLORS.BLACK_TWO,
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        color: COLORS.WHITE,
        marginHorizontal: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
})