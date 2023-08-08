import { GetMoviestype } from './request';
import axios from "axios"

export interface GetMoviestype{
id : number,
title: string,
desc : string,
genre: string
}
export  const getMovies =async () => {
    return( await axios.get<GetMoviestype[]>('http://localhost:3000/movies')).data
    console.log('api')
};
export  const postMovies =async (data :GetMoviestype[]) => {
    return( await axios.post<GetMoviestype[]>('http://localhost:3000/movies',data.data)).data
    console.log('api')
}

export  const getMovie =async (id:string | undefined) => {
    return( await axios.get<GetMoviestype>(`http://localhost:3000/movies/${id}/`)).data
}
export  const deleteMovie =async (id:string | undefined) => {
    console.log(id , 'id')
    return( await axios.delete<GetMoviestype>(`http://localhost:3000/movies/${id}/`)).data
}