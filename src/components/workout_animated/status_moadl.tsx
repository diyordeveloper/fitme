import React, { useState } from "react";
import { Button, Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../themes/constants";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Status_Modal() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={toggleModal} style={styles.btnStatus}>
                <Text style={styles.status}>
                    Статус
                    выполнения
                </Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.text}>Выберите статус</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <TouchableOpacity style={styles.btnOne}>
                                <Text style={styles.textBtn}>В процессе</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleModal} style={styles.btnTwo}>
                                <Text style={styles.btnText}>Выполнено</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Status_Modal;

const styles = StyleSheet.create({
    btnStatus: {
        borderWidth: 1.5,
        borderColor: COLORS.WHITE,
        width: 90,
        paddingVertical: 3,
        borderRadius: 10,

    },
    status: {
        fontSize: 10,
        fontWeight: '600',
        color: COLORS.WHITE,
        textAlign: 'center',

    },
    modalContainer: {
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: COLORS.BLACK_TWO,
        width: 322,
        height: 151,
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 30,
        justifyContent:'space-between',
    },
    btnOne: {
        borderWidth: 1.5,
        borderColor: COLORS.YELLOW,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 30,
    },
    btnTwo: {
        borderWidth: 1.5,
        borderColor: COLORS.GREEN,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 30,
    },
    textBtn: {
        fontSize: 12,
        fontWeight:'700',
        color:COLORS.YELLOW,
    },
    btnText: {
        fontSize: 12,
        fontWeight: '700',
        color: COLORS.GREEN,
    },
    text:{
        fontSize: 17,
        fontWeight:'600',
        textAlign:'center',
        color:COLORS.WHITE,
    },
})