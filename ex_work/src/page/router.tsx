import { Route, Routes } from 'react-router-dom';

import Movis from '../component';
import Movie from '../component/movie';
import NotFound from '../component/NotFound';
import Aboute from '../component/Aboute';

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<Movis />} />
                <Route path="about" element={<Aboute/>} />
                <Route path="movie" element={<Movis />} />
                <Route path="movie/:id" element={<Movie />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default Router