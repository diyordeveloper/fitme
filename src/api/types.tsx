export interface LoginValues {
    phonenumber: string;
}
export interface LoginResponse {
    status: boolean;
    verifycode: string;
}
export interface VerifyResponse {
    user?: User;
    token: string;
}
export interface VerifyLoginValues {
    phonenumber: string;
    verifycode: string;
}
export interface User {
    _id: string;
    role: string,
    name: string,
    image: any,
    verifycode: string,
    phonenumber: string,
    sales: boolean,
    socialMedia: boolean,
    disciples: boolean,
    mytrainers: boolean,
    mealplans: boolean,
    workouts: boolean,
    createdAt: string,
    updatedAt: string,
    __v: number
}