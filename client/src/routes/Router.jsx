import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks';
import { Home, Login, Signup } from '../pages';

export const Router = () => {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
      <Route
        path='/signup'
        element={!user ? <Signup /> : <Navigate to='/' />}
      />
    </Routes>
  );
};
