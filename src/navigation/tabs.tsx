import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, Platform } from 'react-native';
import { COLORS } from '../themes/constants';
import HomeScreen from '../tabs/home/view';
import Base_Of_Exercises_Screen from '../tabs/tabs_inner/home_screen/base_of_exercises/view';
import Training_Programs from '../tabs/tabs_inner/home_screen/training_programs/view';
import Meal_Plans from '../tabs/tabs_inner/home_screen/meal_plans/view';
import { HomeStack } from '../routes/home_stack/HomeStack';
import { WorkoutStack } from '../routes/workout_stck/workoutStack';
import { FoodStack } from '../routes/food_stack/foodStack';
import { ProfileStack } from '../routes/profile_stack/profileStack';

const Tab = createBottomTabNavigator();
const img1 = require('../assets/image/Home.png');
const img2 = require('../assets/image/dumbbell.png');
const img3 = require('../assets/image/Vector.png');
const img4 = require('../assets/image/Administrators.png');
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: COLORS.TABS_COLOR,
                    height: Platform.OS === 'ios' ? 80 : 55,
                },
            }}>

            <Tab.Screen
                name="Главная"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', marginTop: Platform.OS === 'ios' ? 20 : 0, }}>
                            <Image
                                source={img1}
                                resizeMode="contain"
                                style={{
                                    width: Platform.OS === 'ios' ? 25 : 20,
                                    height: Platform.OS === 'ios' ? 25 : 20,
                                    tintColor: focused ? COLORS.WHITE : COLORS.GRAY_ONE,
                                }}
                            />
                            <Text
                                style={{
                                    marginTop: 2,
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: focused ? COLORS.WHITE : COLORS.GRAY_ONE,
                                }}>
                                Главная
                            </Text>
                        </View>
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="Тренировки"
                component={WorkoutStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', marginTop: Platform.OS === 'ios' ? 20 : 0, }}>
                            <Image
                                source={img2}
                                resizeMode="contain"
                                style={{
                                    width: Platform.OS === 'ios' ? 27: 22,
                                    height: Platform.OS === 'ios' ? 27 : 22,
                                    tintColor: focused ? COLORS.WHITE : COLORS.GRAY_ONE,
                                }}
                            />
                            <Text
                                style={{
                                    marginTop: 2,
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: focused ? COLORS.WHITE : COLORS.GRAY_ONE,
                                }}>
                                Тренировки
                            </Text>
                        </View>
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="Питание"
                component={FoodStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', marginTop: Platform.OS === 'ios' ? 20 : 0, }}>
                            <Image
                                source={img3}
                                resizeMode="contain"
                                style={{
                                    width: Platform.OS === 'ios' ? 27 : 22,
                                    height: Platform.OS === 'ios' ? 27 : 22,
                                    tintColor: focused ? COLORS.WHITE : COLORS.GRAY_ONE,
                                }}
                            />
                            <Text
                                style={{
                                    marginTop: 2,
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: focused ? COLORS.WHITE : COLORS.GRAY_ONE,
                                }}>
                                Питание
                            </Text>
                        </View>
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="Профиль"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', marginTop: Platform.OS === 'ios' ? 20 : 0, }}>
                            <Image
                                source={img4}
                                resizeMode="contain"
                                style={{
                                    width: Platform.OS === 'ios' ? 25 : 20,
                                    height: Platform.OS === 'ios' ? 25 : 20,
                                    tintColor: focused ? COLORS.WHITE : COLORS.GRAY_ONE,
                                }}
                            />
                            <Text
                                style={{
                                    marginTop: 2,
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: focused ? COLORS.WHITE : COLORS.GRAY_ONE,
                                }}>
                                Профиль
                            </Text>
                        </View>
                    ),
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
