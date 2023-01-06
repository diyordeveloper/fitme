import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../navigation/ROUTES';
import My_DiaryScreen from '../../tabs/tabs_inner/workout_screen/my_diary/view';
import Is_Free from '../../tabs/tabs_inner/workout_screen/is_free/view';
import Create_Program from '../../tabs/tabs_inner/workout_screen/create_program/view';
import WorkoutScreen from '../../tabs/tabs_inner/workout_screen/workout/view';
import Add_Exercises_Screen from '../../tabs/tabs_inner/workout_screen/add_exercises/view';
import Workout_One_Screen from '../../tabs/tabs_inner/workout_screen/workout_one/view';
import Workout_Two_Screen from '../../tabs/tabs_inner/workout_screen/workout_two/view';
import Workout_Three_Screen from '../../tabs/tabs_inner/workout_screen/workout_Three/view';
import Bench_PressScreen from '../../tabs/tabs_inner/home_screen/bench_press/view';


const Stack = createNativeStackNavigator();
export const WorkoutStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.MY_DIARY} component={My_DiaryScreen} />
            <Stack.Screen name={ROUTES.WORKOUT_IS_FREE} component={Is_Free} />
            <Stack.Screen name={ROUTES.CREATE_PROGRAM} component={Create_Program} />
            <Stack.Screen name={ROUTES.WORKOUT} component={WorkoutScreen} />
            <Stack.Screen name={ROUTES.ADD_EXERCISES} component={Add_Exercises_Screen} />
            <Stack.Screen name={ROUTES.WORKOUT_ONE} component={Workout_One_Screen} />
            <Stack.Screen name={ROUTES.WORKOUT_TWO} component={Workout_Two_Screen} />
            <Stack.Screen name={ROUTES.WORKOUT_THREE} component={Workout_Three_Screen} />
            <Stack.Screen name={ROUTES.BENCH_PRESS} component={Bench_PressScreen} />
        </Stack.Navigator>
    );
};
