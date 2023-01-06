import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../themes/constants';


interface Props {
    tab_one?: any;
    tab_two?: any;

}

const One = ({ tab_one }: Props) => {
    return (
        <View style={{}}>
            {tab_one}
        </View>
    );
};
const Two = ({ tab_two }: Props) => {
    return (
        <View style={{}}>
            {tab_two}
        </View>
    );
};

const Tabs = [
    {
        title: '2 приема пищи',
        content: One,
    },
    {
        title: '3 приема пищи',
        content: Two,
    },
];



const Tab_Two = ({ tab_two, tab_one, }: Props) => {
    const [active, setActive] = useState(0);
    const onTabPress = (i: number) => () => {
        setActive(i);
    };
    return (
        <View style={{ flex: 1, marginTop: 15, }}>
            <View style={styles.ShopContainer}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', }}>
                        {Tabs.map((e, i) => {
                            return (
                                <View
                                    style={{
                                        // marginHorizontal: 5,
                                        alignItems: 'center',
                                        flex: 1,
                                        borderWidth: active === i ? 1.5 : 0,
                                        borderColor: active === i ? COLORS.WHITE : '',
                                        borderRadius: active === i ? 2000 : 0

                                    }}>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={{
                                            paddingVertical: 7,

                                        }}
                                        onPress={onTabPress(i)}
                                        key={i}>
                                        <Text
                                            style={active === i ? styles.textHeader : styles.headerText}>
                                            {e.title}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <View style={{ marginBottom: 20, }}>
                            {Tabs.map((e, i) => {
                                const Content = e.content;
                                return i === active ? <Content tab_one={tab_one} tab_two={tab_two} /> : null;
                            })}
                        </View>
                    </View>
                </View>
            </View>
        </View >
    );
};

export default Tab_Two;

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ShopContainer: {
        flex: 1,
    },
    header: {
        marginHorizontal: 60,
        marginBottom: 15,
    },
    content: {
        flex: 1,
    },
    textHeader: {
        color: COLORS.WHITE,
        fontSize: 11,
        fontWeight: '600',
    },
    headerText: {
        color: '#757575',
        fontSize: 11,
        fontWeight: '400',
    },
});

