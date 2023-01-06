import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../themes/constants';


interface Props {
    tab_one?: any;
    tab_two?: any;

}

const One = ({ tab_one }: Props) => {
    return (
        <View style={{flex: 1,}}>
            {tab_one}
        </View>
    );
};
const Two = ({ tab_two }: Props) => {
    return (
        <View style={{flex: 1,}}>
            {tab_two}
        </View>
    );
};

const Tabs = [
    {

        content: One,
    },
    {

        content: Two,
    },
];

interface TabOneProps extends Props {
    titleList: string[];
}

const Tab_One = ({ tab_two, tab_one, titleList }: TabOneProps) => {
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
                                    // marginHorizontal: 5,
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingVertical: 7,
                                    backgroundColor: active === i ? COLORS.RED_ONE : COLORS.GRAY,
                                    borderRadius: active === i ? 2000 : 0

                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={{

                                        paddingHorizontal: 20,
                                        paddingVertical: 6,

                                    }}
                                    onPress={onTabPress(i)}
                                    key={i}>
                                    <Text
                                        style={styles.textHeader}>
                                        {titleList[i]}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </View>
            <View style={styles.content}>
                <View style={{ marginBottom: 20,flex: 1, }}>
                    {Tabs.map((e, i) => {
                        const Content = e.content;
                        return i === active ? <Content tab_one={tab_one} tab_two={tab_two} /> : null;
                    })}
                </View>
            </View>
        </View>
    );
};

export default Tab_One;

import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ShopContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: COLORS.GRAY,
        marginHorizontal: 20,
        borderRadius: 2000,
        overflow: 'hidden',
    },
    content: {
        flex: 1,

    },
    textHeader: {
        color: COLORS.WHITE,
        fontSize: 11,
        fontWeight: '600',
        textAlign: 'center',
    },

});

