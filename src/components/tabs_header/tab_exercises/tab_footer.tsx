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
]

interface TabOneProps extends Props {
    titleList: string[];
}


const Tab_Footer = ({ tab_two, tab_one, titleList }: TabOneProps) => {
    const [active, setActive] = useState(0);
    const onTabPress = (i: number) => () => {
        setActive(i);
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.ShopContainer}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', }}>
                        {Tabs.map((e, i) => {
                            return (
                                <View
                                    style={{
                                        // marginHorizontal: 5,
                                        alignItems: 'center',
                                        marginHorizontal: 5,
                                        flex: 1,
                                        borderWidth: active === i ? 1.5 : 0,
                                        // borderColor: active === i ? COLORS.WHITE : '',
                                        // borderRadius: active === i ? 2000 : 0

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
                                            {titleList[i]}
                                        </Text>
                                        {active === i ? <View style={{ borderWidth: 1, borderColor: '#fff', marginHorizontal: 15, marginTop: 5, }} /> : null}
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={styles.content}>

                    <View style={{flex: 1, }}>
                        {Tabs.map((e, i) => {
                            const Content = e.content;
                            return i === active ? <Content tab_one={tab_one} tab_two={tab_two} /> : null;
                        })}
                    </View>

                </View>
            </View>
        </View >
    );
};

export default Tab_Footer;

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

