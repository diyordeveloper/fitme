import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../themes/constants';


interface Props {
    tab_one?: any;
    tab_two?: any;
    tab_three?: any;

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
        <View style={{ flex: 1, }}>
            {tab_two}
        </View>
    );
};
const Three = ({ tab_three }: Props) => {
    return (
        <View style={{ flex: 1, }}>
            {tab_three}
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
    {

        content: Three,
    },
];

interface TabOneProps extends Props {
    titleList: string[];
}

const Tab_One_Profile = ({ tab_two, tab_one, tab_three, titleList }: TabOneProps) => {
    const [active, setActive] = useState(0);
    const onTabPress = (i: number) => () => {
        setActive(i);
    };
    return (
        <View style={{ flex: 1, }}>
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
                                        paddingVertical: 10,
                                        backgroundColor: active === i ? COLORS.RED_ONE : COLORS.DARK,
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
                                            style={active === i ? styles.textHeader : styles.textActive}>
                                            {titleList[i]}
                                        </Text>
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
                                return i === active ? <Content tab_one={tab_one} tab_two={tab_two} tab_three={tab_three} /> : null;
                            })}
                        </View>
                </View>
            </View>
        </View >
    );
};

export default Tab_One_Profile;

import { Platform, StyleSheet } from 'react-native';
import { act } from 'react-test-renderer';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ShopContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: COLORS.DARK,
        marginHorizontal: 20,
        marginBottom: 10,
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
    textActive: {
        color: COLORS.WHITE,
        fontSize: 11,
        fontWeight: '600',
        textAlign: 'center',
    },
    oneContainer: {
        flex: 1,
    },
    videoContainer: {
        flexDirection: 'row',
        paddingBottom: 85,
    },
    videoBox: {
        width: '50%',
        flex: 1,
    },

});

