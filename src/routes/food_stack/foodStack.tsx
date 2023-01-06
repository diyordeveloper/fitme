import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../navigation/ROUTES';
import Daily_Calories_Screen from '../../tabs/tabs_inner/food_screen/daily_calories/view';
import RecommendationsScreen from '../../tabs/tabs_inner/food_screen/recommendations/view';
import Dynamics_and_Analysis from '../../tabs/tabs_inner/food_screen/dynamics_and_analysis/view';
import Consumption_Screen from '../../tabs/tabs_inner/food_screen/consumption/view';
import Products_Screen from '../../tabs/tabs_inner/food_screen/product/view';
import Add_To_My_dishes_Screen from '../../tabs/tabs_inner/food_screen/add_to_my_dishes/view';
import Kca_lScreen from '../../tabs/tabs_inner/food_screen/kcal/view';
import Your_Plan_Screen from '../../tabs/tabs_inner/food_screen/your_plan/view';
import Plan_Screen from '../../tabs/tabs_inner/food_screen/plan/view';
import Plan_Adjustment_Screen from '../../tabs/tabs_inner/food_screen/plan_adjustment/view';
import Nutrition_Screen from '../../tabs/food/view';
import Meal_Screen from '../../tabs/tabs_inner/food_screen/meal/view';




const Stack = createNativeStackNavigator();
export const FoodStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.NUTRITION} component={Nutrition_Screen} />
            <Stack.Screen name={ROUTES.DAILY_CALORIES} component={Daily_Calories_Screen} />
            <Stack.Screen name={ROUTES.RECOMMEND} component={RecommendationsScreen} />
            <Stack.Screen name={ROUTES.DYNAMICS} component={Dynamics_and_Analysis} />
            <Stack.Screen name={ROUTES.CONSUMPTION} component={Consumption_Screen} />
            <Stack.Screen name={ROUTES.PRODUCTS} component={Products_Screen} />
            <Stack.Screen name={ROUTES.ADD_MY_DISHES} component={Add_To_My_dishes_Screen} />
            <Stack.Screen name={ROUTES.KCAL} component={Kca_lScreen} />
            <Stack.Screen name={ROUTES.YOUR_PLAN} component={Your_Plan_Screen} />
            <Stack.Screen name={ROUTES.PLAN} component={Plan_Screen} />
            <Stack.Screen name={ROUTES.MEAL} component={Meal_Screen} />
            <Stack.Screen name={ROUTES.ADJUSTMENT} component={Plan_Adjustment_Screen} />
        </Stack.Navigator>
    );
};
