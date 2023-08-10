import { useQuery,useMutation, useQueryClient } from "react-query"
import {  deleteMovie, getMovie, getMovies, postMovies } from "./request"

export const useGetMovies = ()=>{
    return (useQuery("getMovies",getMovies))
}

export const usePostMovies = ()=>{
    const queryClient = useQueryClient()
    return (useMutation (postMovies,{
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries('getMovies')
            
          }
    }))
}
interface Id{
    id : number
}
export const useGetMovie = (id:Id)=>{
    return (useQuery(["getMovies",id],()=>getMovie(id)))
}
export const useDeleteMovie = ()=>{
    const queryClient = useQueryClient()
    return (useMutation(deleteMovie,{
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries('getMovies')
            
          }
    }))
}