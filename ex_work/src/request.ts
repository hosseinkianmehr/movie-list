import axios from 'axios'


const AxiosCustomInstance = axios.create({
	baseURL:  `http://localhost:3000/`
})

export default AxiosCustomInstance
