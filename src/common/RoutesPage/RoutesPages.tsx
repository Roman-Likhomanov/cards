import React, {useEffect} from 'react';
import {Navigate, NavLink, Route, Routes, useNavigate} from "react-router-dom";
import style from './RoutesPages.module.css'
import {Path} from "../Enum/path";
import {Login} from "../../features/auth/Login/Login";
import {Registration} from "../../features/auth/Registration/Registration";
import {Profile} from "../../features/auth/Profile/Profile";
import {ForgotPassword} from "../../features/auth/ForgotPasswod/ForgotPassword/ForgotPassword";
import {NewPassword} from "../../features/auth/ForgotPasswod/NewPassword/NewPassword";
import {CheckEmail} from "../../features/auth/ForgotPasswod/CheckEmail/CheckEmail";
import {Error404} from "../Components/ErrorComponents/Error404/Error404";
import {useSelector} from "react-redux";
import {AppStateType} from "../../app/store";
import {Cards} from "../../features/cards/Cards";
import {Packs} from "../../features/packs/Packs";
import {Learn} from "../../features/learn/Learn";
import {PrivateRoute} from "./PrivateRoute";

export const routes = [
  {path: 'Login', component: <Login/>},
  {path: 'Registration', component: <Registration/>},
  {path: 'Profile', component: <Profile/>},
  {path: 'Cards', component: <Cards/>},
  {path: 'Packs', component: <Packs/>},
  {path: '404', component: <Error404/>},
]

export const RoutesPage = () => {

  const navigate = useNavigate()
  const isLogged = useSelector((state: AppStateType) => state.auth.isLogged)


  useEffect(() => {
    if (!isLogged) {
      navigate(Path.LOGIN)
    }
  }, [])

  return (
    <div>
      <ul className={style.nav}>
        {routes.map(({path}, index) => <li key={index}><NavLink to={path} children={path}
                                                                className={ navData => navData.isActive ? style.active : style.link }></NavLink></li>)}
      </ul>

      <Routes>
        <Route path={'*'} element={<Error404/>}/>
        <Route path={'/'} element={<Navigate to={Path.LOGIN}/>}/>
        <Route path={Path.LOGIN} element={<Login/>}/>
        <Route path={Path.REGISTRATION} element={<Registration/>}/>
        <Route path={Path.PROFILE} element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        }/>
        <Route path={Path.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
        <Route path={Path.NEW_PASSWORD} element={<NewPassword/>}/>
        <Route path={Path.CHECK_EMAIL} element={<CheckEmail/>}/>

        <Route path={`${Path.PACKS}`} element={
          <PrivateRoute>
            <Packs/>
          </PrivateRoute>
        }/>
        <Route path={`${Path.PACKS}/:packsUserId`} element={
          <PrivateRoute>
            <Packs/>
          </PrivateRoute>
        }/>
        <Route path={`${Path.CARDS}`} element={
          <PrivateRoute>
            <Cards/>
          </PrivateRoute>
        }/>
        <Route path={`${Path.CARDS}/:packId`} element={
          <PrivateRoute>
            <Cards/>
          </PrivateRoute>
        }/>
        <Route path={`${Path.LEARN}`} element={
          <PrivateRoute>
            <Learn/>
          </PrivateRoute>
        }/>
        <Route path={`${Path.LEARN}/:packId`} element={
          <PrivateRoute>
            <Learn/>
          </PrivateRoute>
        }/>
      </Routes>

    </div>
  )
}