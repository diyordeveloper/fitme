import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../navigation/ROUTES';
import Profile_Screen from '../../tabs/profile/view';
import My_Details_Screen from '../../tabs/tabs_inner/profile_screen/my_details/view';
import Notifications_Screen from '../../tabs/tabs_inner/profile_screen/notifications/view';
import Settings_Screen from '../../tabs/tabs_inner/profile_screen/settings/view';
import TrainersScreen from '../../tabs/tabs_inner/home_screen/trainers/view';
import CoachesScreen from '../../tabs/tabs_inner/home_screen/coaches/view';
import RecommendationsScreen from '../../tabs/tabs_inner/food_screen/recommendations/view';
import Consumption_Screen from '../../tabs/tabs_inner/food_screen/consumption/view';
import Workout_Three_Screen from '../../tabs/tabs_inner/workout_screen/workout_Three/view';
import My_TrainersScreen from '../../tabs/tabs_inner/profile_screen/my_trainers/view';



const Stack = createNativeStackNavigator();
export const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.PROFILE} component={Profile_Screen} />
            <Stack.Screen name={ROUTES.MY_DETAILS} component={My_Details_Screen} />
            <Stack.Screen name={ROUTES.NOTIFICATION} component={Notifications_Screen} />
            <Stack.Screen name={ROUTES.SETTING} component={Settings_Screen} />
            <Stack.Screen name={ROUTES.MY_TRAINER} component={My_TrainersScreen} />
            <Stack.Screen name={ROUTES.COACHES} component={CoachesScreen} />
            <Stack.Screen name={ROUTES.RECOMMEND} component={RecommendationsScreen} />
            <Stack.Screen name={ROUTES.CONSUMPTION} component={Consumption_Screen} />
            <Stack.Screen name={ROUTES.WORKOUT_THREE} component={Workout_Three_Screen} />
        </Stack.Navigator>
    );
};
