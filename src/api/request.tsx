import axios, { AxiosResponse } from 'axios';
import { store } from '../store/configureStore';
import { userLoggedOut } from '../store/slices/userSlices';
import { LoginResponse, LoginValues, VerifyLoginValues, VerifyResponse } from './types';

export let url = 'http://localhost:3800';
export const API = axios.create({
    url,
    baseURL: url,
});
API.interceptors.request.use(config => {
    let token = store.getState().user.token
    console.log('token---', token);
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return config;
});

API.interceptors.response.use(
    config => {
        return config;
    },
    err => {
        if (err?.response?.status === 401) {
            store.dispatch(userLoggedOut());
        }
        throw err;
    },
);

export const formData = (data: any): FormData => {
    let form = new FormData();
    for (let key in data) {
        form.append(key, data[key]);
    }
    return form;
};


export let requests = {
    auth: {
        login: (creds: LoginValues) =>
            API.post<LoginResponse, AxiosResponse<LoginResponse>, LoginValues>(
                '/auth/login',
                creds,
            ),

        verify: (creds: VerifyLoginValues) =>
            API.post<VerifyResponse, AxiosResponse<VerifyResponse>, VerifyLoginValues>('/auth/verify', creds),
    },
    exercise: {
        getExercise: () => API.get('/exercise/all')
    },
    trainers: {
        getTrainers: () => API.get('user/gettrainers?male=Мужской'),
        getTrainer: () => API.get('user/gettrainers?male=Женской')
    }
};
