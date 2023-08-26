import { Route, Routes } from 'react-router-dom';

import Login from '../component/login';
import Register from '../component/register';
import PrivateRoute from './PrivateRoute';
import AuthenticationRoute from './AuthenticationRoute';
import Page from './Pages';

const Router = () => {
    return (
        <>
            <Routes >
                <Route element={<AuthenticationRoute />}>
                    <Route path="login/" element={<Login />} />
                    <Route path="register/" element={<Register />} />
                </Route>

                <Route element={<PrivateRoute />}>
                    <Route path='/*' element={<Page/>} />
                </Route>
                
            </Routes>
        </>
    )
}

export default Router