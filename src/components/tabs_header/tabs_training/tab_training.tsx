import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../themes/constants';


interface Props {
    tab_one?: any;
    tab_two?: any;
    tab_three?: any;
    bottom?: any;

}

const One = ({ tab_one,bottom }: Props) => {
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
const Three = ({ tab_three }: Props) => {
    return (
        <View style={{}}>
            {tab_three}
        </View>
    );
};

const Tabs = [
    {
        title: 'Новичок',
        content: One,
    },
    {
        title: 'Опытный',
        content: Two,
    },
    {
        title: 'Продвинутый',
        content: Three,
    },
];



const Tab_Training = ({ tab_two, tab_one, tab_three, bottom }: Props) => {
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
                {/* <ScrollView> */}
                    <View style={{ marginBottom: 20, }}>
                        {Tabs.map((e, i) => {
                            const Content = e.content;
                            return i === active ? <Content tab_one={tab_one} tab_two={tab_two} tab_three={tab_three} bottom={bottom} /> : null;
                        })}
                    </View>
                {/* </ScrollView> */}
            </View>
        </View>

    );
};

export default Tab_Training;

import { StyleSheet } from 'react-native';
import Bottom_Auth from '../../bottom_auth/Bottom_Auth';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ShopContainer: {
        flex: 1,
    },
    header: {
        marginTop: 10,
        marginHorizontal: 60,
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

