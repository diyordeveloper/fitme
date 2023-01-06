import React from "react";
import { ROUTES } from "../../../../navigation/ROUTES";



export const TrainingHooks = () => {

    const data = [
        {
            id: 1,
            title: 'Фулл-бади',
            text: 'Бесплатно',
            name: 'Аркадий Новиков',
            imageUrl: require('../../../../assets/image/Image.png'),
            screenPath: ROUTES.IS_FREE
        },
        {
            id: 2,
            title: 'Фулл-бади',
            text: 'Бесплатно',
            name: 'Аркадий Новиков',
            imageUrl: require('../../../../assets/image/Image.png'),
            screenPath: ROUTES.IS_FREE
        },
        {
            id: 3,
            title: 'Фулл-бади',
            text: '50.000 сум',
            name: 'Аркадий Новиков',
            imageUrl: require('../../../../assets/image/Image.png'),
            screenPath: ROUTES.PAID,
        },
    ]

    return { data }
}