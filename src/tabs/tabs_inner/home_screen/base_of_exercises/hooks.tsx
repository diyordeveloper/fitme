import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ROUTES } from "../../../../navigation/ROUTES";
import { requests } from "../../../../api/request";
import { useDispatch, useSelector } from "react-redux";
import { setTrainingTypes, trainingSelector } from "../../../../store/slices/trainingSlice";

export const ExercisesHooks = () => {

    const navigation = useNavigation<any>();
    const [exercise, setExercise] = useState<any>([])
    const dispatch = useDispatch()
    const trainingTypes = useSelector(trainingSelector)
    console.log(trainingTypes, 'QNJU_---------------------');

    const onBenchPress = (item: any) => {
        navigation.navigate(ROUTES.BENCH_PRESS, { item })
    }

    const effect = async () => {
        try {
            let res = await requests.exercise.getExercise()
            setExercise(res.data?.result)
            dispatch(setTrainingTypes(res.data.result))
        } catch (error) {
            console.log(error, 'ISHLAMADI _---------------')
        }
    }
    useEffect(() => {
        effect()
    }, [])

    return { navigation, exercise, onBenchPress, trainingTypes }
}