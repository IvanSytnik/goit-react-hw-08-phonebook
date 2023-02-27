import './App.css'

import {Routes,Route} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { lazy, Suspense, useEffect } from "react";
import { getIsLogInAlready } from "redux/AuthOperation/auth.selector";
import Contacts from '../Contacts/Contacts';
import { refreshUser } from 'redux/AuthOperation/authOperation';

const PrivatRoutes = lazy(()=>import  ('../UserCreate/PrivatRoutes'));
const PublicRoutes = lazy(()=>import  ('../UserCreate/PublicRoutes'));
const UserLogin = lazy(()=>import  ( '../UserLogin/UserLogin'));
const UserRegister = lazy(()=>import  ( '../UserRegister/UserRegister'));
const Navigation = lazy(()=>import ('../Navigation/Navigation'));
const HomePage = lazy(() => import('../HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLogInAlready = useSelector(getIsLogInAlready);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isLogInAlready && (<>
        <Suspense fallback={null}>
        <Navigation />
    <Routes>
      <Route index  element={<HomePage />} />
      <Route path='/register' element={<PublicRoutes 
        redirectTo="/contacts" component={<UserRegister />} />} />
      
      <Route path='/login' element={<PublicRoutes 
      redirectTo="/contacts" component={<UserLogin/>}/> } />

      <Route path='/contacts'
        element={<PrivatRoutes redirectTo="/login"
        component={<Contacts />}/>}/>
    </Routes>
 </Suspense>
    </>
    )
  );
};

