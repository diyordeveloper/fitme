import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../../../../navigation/ROUTES";


export const TrainersHooks = () => {

    const navigation = useNavigation()

    const data = [
        {
            id: 1,
            name: 'Дима Пономарев',
            work: 'Тренер по фитнесу',
            year: "Опыт - 5 лет",
            old: "25 лет",
            live: 'Ташкент',
            imgUrl: require('../../../../assets/image/trener.png'),
            screenPath: ROUTES.COACHES

        },
        {
            id: 2,
            name: 'Дима Пономарев',
            work: 'Тренер по фитнесу',
            year: "Опыт - 5 лет",
            old: "25 лет",
            live: 'Ташкент',
            imgUrl: require('../../../../assets/image/trener.png'),
            screenPath: ROUTES.COACHES

        },
        {
            id: 3,
            name: 'Дима Пономарев',
            work: 'Тренер по фитнесу',
            year: "Опыт - 5 лет",
            old: "25 лет",
            live: 'Ташкент',
            imgUrl: require('../../../../assets/image/trener.png'),
            screenPath: ROUTES.COACHES

        },
    ]

    return { data, navigation }
}