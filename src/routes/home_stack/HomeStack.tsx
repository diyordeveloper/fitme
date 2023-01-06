import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../navigation/ROUTES';
import Meal_Plans from '../../tabs/tabs_inner/home_screen/meal_plans/view';
import HomeScreen from '../../tabs/home/view';
import Base_Of_Exercises_Screen from '../../tabs/tabs_inner/home_screen/base_of_exercises/view';
import Training_Programs from '../../tabs/tabs_inner/home_screen/training_programs/view';
import TrainersScreen from '../../tabs/tabs_inner/home_screen/trainers/view';
import PaidScreen from '../../tabs/tabs_inner/home_screen/paid/view';
import Is_Free from '../../tabs/tabs_inner/home_screen/is_free/view';
import PaymentScreen from '../../tabs/tabs_inner/home_screen/payment/view';
import Bench_PressScreen from '../../tabs/tabs_inner/home_screen/bench_press/view';
import Individual_ProgramScreen from '../../tabs/tabs_inner/home_screen/individual_program/view';
import CoachesScreen from '../../tabs/tabs_inner/home_screen/coaches/view';
import Individual_Screen from '../../tabs/tabs_inner/home_screen/individual/view';


const Stack = createNativeStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.MEAL_PLANS} component={Meal_Plans} />
      <Stack.Screen name={ROUTES.BASE_OF_EXERCISES} component={Base_Of_Exercises_Screen} />
      <Stack.Screen name={ROUTES.TRAINERS} component={TrainersScreen} />
      <Stack.Screen name={ROUTES.TRAINING_PROGRAMS} component={Training_Programs} />
      <Stack.Screen name={ROUTES.PAID} component={PaidScreen} />
      <Stack.Screen name={ROUTES.IS_FREE} component={Is_Free} />
      <Stack.Screen name={ROUTES.BENCH_PRESS} component={Bench_PressScreen} />
      <Stack.Screen name={ROUTES.INDIVIDUAL} component={Individual_Screen} />
      <Stack.Screen name={ROUTES.INDIVIDUAL_PROGRAM} component={Individual_ProgramScreen} />
      <Stack.Screen name={ROUTES.COACHES} component={CoachesScreen} />

    </Stack.Navigator>
  );
};
