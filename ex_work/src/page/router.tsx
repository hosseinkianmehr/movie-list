import { Route, Routes } from 'react-router-dom';

import Movis from '../component';
import Movie from '../component/movie';
import NotFound from '../component/NotFound';
import Aboute from '../component/Aboute';
import Login from '../component/login';
import Register from '../component/register';
import Userpage from '../component/user';
import PrivateRoute from './PrivateRoute';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="login/" element={<Login />} />
                <Route path="register/" element={<Register />} />
                <Route element={<PrivateRoute/>}>
                    <Route index element={<Movis />} />
                    <Route path="about" element={<Aboute />} />
                    <Route path="movie" element={<Movis />} />
                    <Route path="movie/:id" element={<Movie />} />
                    <Route path="user/:id" element={<Userpage />} />
                </Route>


                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default Router