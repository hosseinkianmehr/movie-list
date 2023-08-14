import axios from "axios"

export interface GetMoviestype {
    id?: number,
    title: string,
    desc?: string,
    genre?: string
}
export const getMovies = async () => {
    return (await axios.get<GetMoviestype[]>('http://localhost:3000/movies')).data
    console.log('api')
};
interface Data {
    title?: string,
    desc?: string,
    genre?: string
}
export const postMovies = async (data: Data) => {
    return (await axios.post<Data[]>('http://localhost:3000/movies', data)).data
    console.log('api')
}
interface Id {
    id: number
}
export const getMovie = async (id: Id) => {
    return (await axios.get<GetMoviestype>(`http://localhost:3000/movies/${id}/`)).data
}
export const deleteMovie = async (id: number) => {
    console.log(id, 'id')
    return (await axios.delete<GetMoviestype>(`http://localhost:3000/movies/${id}/`)).data
}


//////////////////////server user
interface RegisterData {
    email: string,
    firstName: string,
    lastname: string,
    age: number,
    password: string,
}
export const registerUser = async (data: RegisterData) => {
    return (await axios.post<RegisterData[]>('http://localhost:3002/Register/', data)).data
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