import { createSlice } from "@reduxjs/toolkit";
const trainingSlice = createSlice({
	name: "trainingSlice",
	initialState: {
		trainingTypes: [],
		pickedTrainings: [],
	},
	reducers: {
		setTrainingTypes: (state, action) => {
			return { ...state, trainingTypes: action.payload };
		},

		// togglePickedTrainings: (state, action) => {
		// 	let _pickedTrainings = [...state.pickedTrainings];
		// 	if (state.pickedTrainings.indexOf(action.payload) === -1) {
		// 		_pickedTrainings.push(action.payload);
		// 		console.log(action.payload,'NIMA KEVOTTTTIIII ------------')
		// 	} else {
		// 		_pickedTrainings = _pickedTrainings.filter(
		// 			(e) => e !== action.payload
		// 		);
		// 	}
		// 	return { ...state, pickedTrainings: _pickedTrainings };
		// },
	},
});
export const { setTrainingTypes} =
	trainingSlice.actions;

export const trainingSelector = (state: {training:{trainingTypes: any }}) =>
	state.training.trainingTypes;
	
export const pickedTrainingsSelector = (state: {training:{pickedTrainings: any }}) => 
state.training.pickedTrainings;

export default trainingSlice.reducer;
