import {combineReducers} from 'redux';
import userSlice from './userSlices';
import trainingSlice from './trainingSlice';

export const rootReducer = combineReducers({
	user: userSlice,
	training: trainingSlice,
});
