import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ROUTES } from "../../../../navigation/ROUTES";
import { requests } from "../../../../api/request";


export const TrainersHooks = () => {



    const navigation = useNavigation<any>();
    const [trainers, setTrainers] = useState<any>([])
    const [women, setWomen] = useState<any>([])
    const [data, setData] = useState<any>([])


    const onCoachesPress = (item: any) => {
        navigation.navigate(ROUTES.COACHES, { item })
    }

    const effect = async () => {
        try {
            let res = await requests.trainers.getTrainers()
            let ress = await requests.trainers.getTrainer()
            setWomen(ress.data?.result)
            setTrainers(res.data?.result)
            setData(res.data.result)
        } catch (error) {
            console.log(error, 'ISHLAMADI _---------------')
        }
    }
    useEffect(() => {
        effect()
    }, [])

    return { trainers, onCoachesPress, women }
}