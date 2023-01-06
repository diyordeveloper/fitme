import React from "react";
import { ROUTES } from "../../navigation/ROUTES";

export const HomeHooks = () => {
    const data = [
        {
            id: 1,
            title: 'Для всех групп мышц',
            name: 'База упражнений',
            imageUrl: require('../../assets/image/fitnis.png'),
            screenPath: ROUTES.BASE_OF_EXERCISES
        },
        {
            id: 2,
            title: 'Для Мужчин и Женщин Для Новичков и Продвинутых',
            name: 'Программы тренировок',
            imageUrl: require('../../assets/image/fitnesOne.png'),
            screenPath: ROUTES.TRAINING_PROGRAMS
        },
        {
            id: 3,
            title: 'Для жиросжигания и набора мышечной массы',
            name: 'Планы питания',
            imageUrl: require('../../assets/image/fitnesTwo.png'),
            screenPath: ROUTES.MEAL_PLANS
        },
        {
            id: 4,
            title: 'Выберите себе наставника, который поможет вам добиться ваших целей',
            name: 'Тренеры',
            imageUrl: require('../../assets/image/fitnesThree.png'),
            screenPath: ROUTES.TRAINERS
        },
    ]

    return { data }
}