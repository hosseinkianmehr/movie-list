import { useQuery,useMutation, useQueryClient } from "react-query"
import {  GetMoviesPage, deleteMovie, getMovie, getMovies, getUser, postMovies, registerUser } from "./request"
import { useNavigate } from "react-router-dom"

export const useGetMovies = ()=>{
    return (useQuery("getMovies",getMovies))
}

export const useGetMoviesPage = (page:number)=>{
    return (useQuery(["GetMoviesPage",page],()=>GetMoviesPage(page)))
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
export const useGetMovie = (id: number)=>{
    return (useQuery(["getMovies",id],()=>getMovie(id)))
}
export const useDeleteMovie = ()=>{
    //const queryClient = useQueryClient()
    
    return (useMutation(deleteMovie
        ,{
        onSuccess: () => {
            
            //queryClient.invalidateQueries('getMovies')
            
          }
    }))
};
//////////////////////////server user
export const useRegister = ()=>{
    //const queryClient = useQueryClient()
    const navigate = useNavigate()
    return (useMutation(registerUser,{onSuccess:()=>{navigate('/login')}}
   
        ))
};

/*/

export const useLogin = ()=>{
    //const queryClient = useQueryClient()
    
    return (useMutation(loginUser))
}; */

export const useGetUser = (id:number)=>{
    return (useQuery(["getMovies",id],()=>getUser(id)))
}