import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AuthorizationScreen from '../auth/authorization/view';
import LanguageSelectionScreen from '../auth/language_selection/view';
import NumberConfirmation from '../auth/number_confirmation/view';
import RegistrationScreen from '../auth/registration/view';
import WelcomeScreen from '../auth/welcome/view';
import { useAppSelector } from '../store/hooks';
import { selectUser } from '../store/slices/userSlices';
import PaymentScreen from '../tabs/tabs_inner/home_screen/payment/view';
import { ROUTES } from './ROUTES';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();
export const AuthNavigation = () => {
    let user = useAppSelector(selectUser)
    console.log('isLogin', user);
    let isLoggedIn = !!user.user.token
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isLoggedIn ? (
        <>
            <Stack.Screen name={ROUTES.LANGUE} component={LanguageSelectionScreen} />
            <Stack.Screen name={ROUTES.WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={ROUTES.AUTHORIZATION} component={AuthorizationScreen} />
            <Stack.Screen name={ROUTES.REGISTRATION} component={RegistrationScreen} />
            <Stack.Screen name={ROUTES.NUMBER_CONFIRMATION} component={NumberConfirmation} />
                </>
            ) :(
                <>
            <Stack.Screen name='tabs' component={Tabs} />
            <Stack.Screen name={ROUTES.PAYMENT} component={PaymentScreen} />
                    </>
            )}


        </Stack.Navigator>
    );
};