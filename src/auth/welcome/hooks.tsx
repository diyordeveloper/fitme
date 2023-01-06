import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ROUTES } from '../../navigation/ROUTES';

export const WelcomeHooks = () => {
    const [showedContent, setShowedContent] = useState(0);

    const navigation = useNavigation();
    const onAuthorizationPress = () => {
        navigation.navigate(ROUTES.AUTHORIZATION);
    };

    const onPress = () => {
        if (showedContent === 3) {
            onAuthorizationPress();
        } else {
            setShowedContent(showedContent + 1);
        }
    };
    return { onPress, showedContent, onAuthorizationPress };
};
