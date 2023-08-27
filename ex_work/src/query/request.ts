import axios from "axios"
import request from "../request"
import type { registerFormData } from "../component/register";

export interface GetMoviestype {
    id: number,
    title: string,
    desc?: string,
    genre?: string
}
export const getMovies = async () => {
    return (await request.get<GetMoviestype[]>('movies')).data
    console.log('api')
};
interface Data {
    title?: string,
    desc?: string,
    genre?: string
}
export const postMovies = async (data: Data) => {
    return (await request.post<Data[]>('movies', data)).data
    console.log('api')
}

export const getMovie = async (id: number) => {
    return (await request.get<GetMoviestype>(`movies/${id}/`)).data
}
export const deleteMovie = async (id: number) => {
    console.log(id, 'id')
    return (await request.delete<GetMoviestype>(`movies/${id}/`)).data
}


//////////////////////server user
interface RegisterData {
    email: string,
    firstName: string,
    lastname: string,
    age: number,
    password: string,
}
export const registerUser = async (data: registerFormData) => {
    return (await request.post<RegisterData[]>('Register/', data)).data
    console.log('api')
}
/*

interface LoginData {
    email: string,
    password: string,
}
export const loginUser = async (data: LoginData) => {
    console.log(data ,"loggin")
    return (await axios.post<LoginData[]>('http://localhost:3002/login/', data)).data
    console.log('api')
}
 */

export const getUser = async (id: number) => {
    return (await axios.get<RegisterData>(`http://localhost:3002/users/${id}/`)).data
}