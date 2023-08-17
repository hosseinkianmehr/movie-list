import { useNavigate } from 'react-router-dom'
import { useGetUser } from '../query'
import { useParams } from 'react-router-dom';



const Userpage = () => {
    const {id}=useParams()
    const { data, isError } = useGetUser(id)
    const navigate =useNavigate()
    console.log(data, 'user')
 if (isError) {
    navigate('/NotFound')
    return(<></>)
    } 
return(
    <>
    <p>{data?.email}</p>
    <p>{data?.firstName}</p>
    <p>{data?.age}</p>
    </>
)
    
  
}
export default Userpage