import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../themes/constants';


interface Props {
    tab_one?: any;
    tab_two?: any;
    tab_three?: any;
    tab_Four?: any;

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
const Three = ({ tab_three }: Props) => {
    return (
        <View style={{ flex: 1, }}>
            {tab_three}
        </View>
    );
};
const Four = ({ tab_Four }: Props) => {
    return (
        <View style={{ flex: 1, }}>
            {tab_Four}
        </View>
    );
};

const Tabs = [
    {
        title: 'Схемы питания',
        content: One,
    },
    {
        title: 'Мои планы',
        content: Two,
    },
    {
        title: 'Мои продукты',
        content: Three,
    },
    {
        title: 'База продуктов',
        content: Four,
    },
];



const Tab_Nutrition = ({ tab_two, tab_one, tab_three, tab_Four }: Props) => {
    const [active, setActive] = useState(0);
    const onTabPress = (i: number) => () => {
        setActive(i);
    };
    return (
        <View style={{ flex: 1, marginTop: 30, }}>
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
                                        justifyContent: 'center',
                                        borderWidth: active === i ? 1.5 : 0,
                                        borderColor: active === i ? COLORS.WHITE : '',
                                        borderRadius: active === i ? 2000 : 0,

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
               
                        <View style={{ marginBottom: 20,flex: 1, }}>
                            {Tabs.map((e, i) => {
                                const Content = e.content;
                                return i === active ? <Content tab_one={tab_one} tab_two={tab_two} tab_three={tab_three} tab_Four={tab_Four} /> : null;
                            })}
               
                    </View>
                </View>
            </View>
        </View >
    );
};

export default Tab_Nutrition;

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
        fontSize: 11,
        fontWeight: '600',
        textAlign: 'center',
        marginHorizontal: 6,

    },
    headerText: {
        color: '#757575',
        fontSize: 11,
        fontWeight: '400',
        textAlign: 'center',
        marginHorizontal: 6,
    },
});

