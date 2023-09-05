import axios from "axios"
import request from "../request"
import type { registerFormData } from "../component/register";
import parse from 'parse-link-header'
//var parse = require('parse-link-header');

export const getMovies = async () => {
    return (await request.get<GetMoviestype[]>('movies')).data
    console.log('api')
};

export const GetMoviesPage = async (page: number) => {
    return (await request.get<GetMoviestype>(`movies?_page=${page}&_limit=10/`)).data
    // const parslink = parse(res.headers.Link)
    // console.log(parslink.last.page,'parslink.last.page')
    
    // return {
    //     data:res.data,
    //     lastpagination : parslink.last.page
    // }
    

}

export const postMovies = async (data: postMoviesData) => {
    return (await request.post<postMoviesData[]>('movies', data)).data
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

export const registerUser = async (data: registerFormData) => {
    return (await request.post<registerFormData[]>('Register/', data)).data
    console.log('api')
}
/*
export const loginUser = async (data: LoginData) => {
    console.log(data ,"loggin")
    return (await axios.post<LoginData[]>('http://localhost:3002/login/', data)).data
    console.log('api')
}
 */

export const getUser = async (id: number) => {
    return (await axios.get<RegisterData>(`http://localhost:3002/users/${id}/`)).data
}