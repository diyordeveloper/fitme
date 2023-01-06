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
        <View style={{flex: 1,}}>
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
const Six = ({ tab_Six }: Props) => {
    return (
        <View style={{}}>
            {tab_Six}
        </View>
    );
};

const Tabs = [
    {
        content: One,
        title: 'Овощи'
    },
    {
        content: Two,
        title: 'Фрукты'
    },
    {
        content: Three,
        title: 'Хлеб'
    },
    {
        content: Four,
        title: 'Сладкое'
    },
    {
        content: Five,
        title: 'Злаки'
    },
]



const Tab_Base_products = ({ tab_two, tab_one, tab_Five, tab_three }: Props) => {
    const [active, setActive] = useState(0);
    const onTabPress = (i: number) => () => {
        setActive(i);
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.ShopContainer}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        {Tabs.map((e, i) => {
                            return (
                                <View
                                    style={{
                                        // marginHorizontal: 5,
                                        alignItems: 'center',
                                        marginHorizontal: 5,
                                        flex: 1,
                                        borderWidth: active === i ? 1.5 : 0,
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
                                        {active === i ? <View style={{ borderWidth: 1, borderColor: '#fff', marginHorizontal: 5, marginTop: 5, }} /> : null}
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>

                </View>
                <View style={styles.content}>    
                        <View style={{ marginBottom: 20, flex: 1,}}>
                            {Tabs.map((e, i) => {
                                const Content = e.content;
                                return i === active ? <Content tab_one={tab_one} tab_two={tab_two} tab_Five={tab_Five} /> : null;
                            })}
                        </View>
                </View>
            </View>
        </View >
    );
};

export default Tab_Base_products;

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
    },
    headerText: {
        color: '#757575',
        fontSize: 12,
        fontWeight: '600',
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.GREEN,
    },
});

