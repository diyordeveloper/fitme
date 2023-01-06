import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../themes/constants';


interface Props {
    tab_one?: any;
    tab_two?: any;
    tab_three?: any
    tab_Four?: any;
    tab_Five?: any;
    tab_Six?: any;


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

const Four = ({ tab_Four }: Props) => {
    return (
        <View style={{}}>
            {tab_Four}
        </View>
    );
};
const Five = ({ tab_Five }: Props) => {
    return (
        <View style={{}}>
            {tab_Five}
        </View>
    );
};

const Six = ({ tab_Five }: Props) => {
    return (
        <View style={{}}>
            {tab_Five}
        </View>
    );
};
const Seven = ({ tab_Five }: Props) => {
    return (
        <View style={{}}>
            {tab_Five}
        </View>
    );
};

const Tabs = [
    {
        content: One,
        title: '1',
        data:'Пн',
    },
    {
        content: Two,
        title: '2',
        data: 'Вт',
    },
    {
        content: Three,
        title: '3',
        data: 'Ср',
    },
    {
        content: Four,
        title: '4',
        data: 'Чт',
    },
    {
        content: Five,
        title: '5.',
        data: 'Пт',
    },
    {
        content: Six,
        title: '6',
        data: 'Сб',
    },
    {
        content: Seven,
        title: '7',
        data: 'Вс',
    },
]



const Tab_Data = ({ tab_two, tab_one, tab_Five, tab_Four, tab_three }: Props) => {
    const [active, setActive] = useState(0);
    const onTabPress = (i: number) => () => {
        setActive(i);
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.ShopContainer}>
                <View style={styles.header}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', }}>
                            {Tabs.map((e, i) => {
                                return (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            marginHorizontal: 5,
                                            flex: 1,
                                            borderWidth: active === i ? 1.5 : 0,
                                        }}>
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            style={{
                                              width:45,
                                              height:50,
                                                borderWidth: active === i ? 1 : 1,
                                                borderColor: active === i ? COLORS.WHITE : COLORS.GRAY_ONE,
                                                borderRadius: 10,
                                                alignItems:'center',
                                                justifyContent:'center',
                                                paddingHorizontal: 7,

                                            }}
                                            onPress={onTabPress(i)}
                                            key={i}>
                                            <Text
                                                style={active === i ? styles.textHeader : styles.headerText}>
                                                {e.title}
                                            </Text>
                                            <Text
                                                style={active === i ? styles.textHeader : styles.headerText}>
                                                {e.data}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginBottom: 20, }}>
                            {Tabs.map((e, i) => {
                                const Content = e.content;
                                return i === active ? <Content tab_one={tab_one} tab_two={tab_two} tab_three={tab_three} tab_Four={tab_Four} tab_Five={tab_Five} /> : null;
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View >
    );
};

export default Tab_Data;

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ShopContainer: {
        flex: 1,
    },
    header: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    content: {
        flex: 1,
    },
    textHeader: {
        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: '600',
        top: 3,
    },
    headerText: {
        color: '#757575',
        fontSize: 12,
        fontWeight: '600',
        top: 3,
    },
});

