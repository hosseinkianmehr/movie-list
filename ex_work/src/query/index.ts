import { useQuery,useMutation, useQueryClient } from "react-query"
import {  deleteMovie, getMovie, getMovies, getUser, loginUser, postMovies, registerUser } from "./request"
import { useNavigate } from "react-router-dom"

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

export const useGetUser = (id:Id)=>{
    return (useQuery(["getMovies",id],()=>getUser(id)))
}