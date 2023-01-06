import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../../../../navigation/ROUTES";
import { useDispatch, useSelector } from "react-redux";
import {
	pickedTrainingsSelector,
	trainingSelector,
} from "../../../../store/slices/trainingSlice";

export const AddExercisesHooks = () => {
	const navigation = useNavigation();

	const trainingTypes = useSelector(trainingSelector);
	const pickedTrainings = useSelector(pickedTrainingsSelector);
	const dispatch = useDispatch();

	console.log({ pickedTrainings });

	return {
		navigation,
		trainingTypes,
		pickedTrainings: [],
	};
};
