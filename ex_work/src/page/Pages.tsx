import { Route, Routes } from 'react-router-dom'
import Movis from '../component'
import Aboute from '../component/Aboute'
import Movie from '../component/movie'
import Userpage from '../component/user'
import NotFound from '../component/NotFound'


export default function Page() {
    return (
        <>
        <Routes>
            <Route index element={<Movis />} />
            <Route path="/about" element={<Aboute />} />
            <Route path="/movie" element={<Movis />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="user/:id" element={<Userpage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    )
}
