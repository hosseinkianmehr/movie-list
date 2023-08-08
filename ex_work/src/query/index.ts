import { useQuery,useMutation } from "react-query"
import {  GetMoviestype, deleteMovie, getMovie, getMovies, postMovies } from "./request"

export const useGetMovies = ()=>{
    return (useQuery("getMovies",getMovies))
}
export const usePostMovies = (data :GetMoviestype[])=>{
    console.log(data,"index")
    return (useMutation (postMovies))
}

export const useGetMovie = (id:string | undefined)=>{
    return (useQuery(["getMovies",id],()=>getMovie(id)))
}
export const useDeleteMovie = (id:string | undefined)=>{
    return (useMutation(deleteMovie))
}