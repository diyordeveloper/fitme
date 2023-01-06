import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../themes/constants';


interface Props {
    tab_one?: any;
    tab_two?: any;
    tab_three?: any;
    tab_four?: any;
    tab_five?: any;
    tab_six?: any;

}

const One = ({ tab_one }: Props) => {
    return (
        <View style={{ flex: 1, }}>
            {tab_one}
        </View>
    );
};
const Two = ({ tab_two }: Props) => {
    return (
        <View style={{ flex: 1, }}>
            {tab_two}
        </View>
    );
};
const Three = ({ tab_three }: Props) => {
    return (
        <View style={{}}>
            {tab_three}
        </View>
    );
};
const Four = ({ tab_four }: Props) => {
    return (
        <View style={{}}>
            {tab_four}
        </View>
    );
};
const Five = ({ tab_five }: Props) => {
    return (
        <View style={{}}>
            {tab_five}
        </View>
    );
};
const Six = ({ tab_six }: Props) => {
    return (
        <View style={{}}>
            {tab_six}
        </View>
    );
};

const Tabs = [
    {
        title: 'Грудь',
        content: One,
    },
    {
        title: 'Спина',
        content: Two,
    },
    {
        title: 'Ноги',
        content: Three,
    },
    {
        title: 'Плечи',
        content: Four,
    },
    {
        title: 'Руки',
        content: Five,
    },
    {
        title: 'Пресс',
        content: Six,
    },
];


const Tab_Exercises = ({ tab_two, tab_one, }: Props) => {
    const [active, setActive] = useState(0);
    const onTabPress = (i: number) => () => {
        setActive(i);
    };
    return (

        <View style={styles.ShopContainer}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', }}>
                    {Tabs.map((e, i) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    marginHorizontal: 5,
                                    flex: 1,
                                    borderWidth: active === i ? 1.5 : 0,
                                    borderColor: active === i ? COLORS.WHITE : '',
                                    borderRadius: active === i ? 2000 : 0

                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={{
                                        paddingVertical: 5,

                                    }}
                                    onPress={onTabPress(i)}
                                    key={i}>
                                    <Text
                                        style={active === i ? styles.textHeader : styles.headerText}>
                                        {e.title}
                                    </Text>
                                    <View></View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </View>
            <View style={styles.content}>
                <View style={{ marginBottom: 20, flex: 1, }}>
                    {Tabs.map((e, i) => {
                        const Content = e.content;
                        return i === active ? <Content tab_one={tab_one} tab_two={tab_two} /> : null;
                    })}
                </View>
            </View>
        </View>

    );
};

export default Tab_Exercises;

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ShopContainer: {
        flex: 1,

    },
    header: {
        marginHorizontal: 10,
        marginBottom: 5,
    },
    content: {
        flex: 1,
    },
    textHeader: {
        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: '600',
    },
    headerText: {
        color: '#757575',
        fontSize: 12,
        fontWeight: '600',
    },
});

