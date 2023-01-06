import {VerifyResponse, User} from '../../api/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

let initialState: VerifyResponse = {
  token: '',
  user: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<VerifyResponse>) => {
      console.log('redux---', action.payload);
      state.token = action.payload.token;
      state.user = action.payload.user
      return state
    },
    userLoggedOut: () => {
      return initialState;
    },
    userFetched: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const {userLoggedIn, userLoggedOut, userFetched} = userSlice.actions;

export const selectUser = (state: any) => {  
  return state
}

export default userSlice.reducer;
