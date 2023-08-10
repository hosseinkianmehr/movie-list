import axios from "axios"

export interface GetMoviestype{
id?: number,
title: string,
desc ?: string,
genre?: string
}
export  const getMovies =async () => {
    return( await axios.get<GetMoviestype[]>('http://localhost:3000/movies')).data
    console.log('api')
};
interface Data{
    title?: string,
    desc?: string,
    genre?: string
}
export  const postMovies =async (data :Data) => {
    return( await axios.post<Data[]>('http://localhost:3000/movies',data)).data
    console.log('api')
}
interface Id{
    id : number
}
export  const getMovie =async (id:Id) => {
    return( await axios.get<GetMoviestype>(`http://localhost:3000/movies/${id}/`)).data
}
export  const deleteMovie =async (id:number) => {
    console.log(id , 'id')
    return( await axios.delete<GetMoviestype>(`http://localhost:3000/movies/${id}/`)).data
}