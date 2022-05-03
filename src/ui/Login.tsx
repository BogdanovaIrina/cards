import React, {ChangeEvent, useCallback, useState} from 'react'
import {useFormik} from "formik";
import {NavLink, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {LoginParamsType} from "../dal/loginAPI";
import {SuperInputText} from "./common/superinput/SuperInputText";
import {SuperCheckbox} from "./common/supercheckbox/SuperCheckbox";
import {SuperButton} from "./common/superbutton/SuperButton";
import {login} from "../bll/login-reducer";
import s from './Login.module.css'

export const Login = () => {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.loginPage.isLoggedIn)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const onclickEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value), [setEmail])
    const onclickPassword = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value), [setPassword])

    const onclickHandler = useCallback(() => {
        dispatch<any>(login({email, password, rememberMe}))
    }, [email, password, rememberMe, dispatch])

    if (isLoggedIn) {
        return <Navigate to={'/'} />
    }

    return (
           <div className={s.main}>
        <h3>Sign In</h3>
        <SuperInputText type={'email'} placeholder={'Enter email'} onChange={onclickEmail}/>
        <SuperInputText type={'password'} placeholder={'Password'} onChange={onclickPassword}/>
        <SuperCheckbox onChangeChecked={setRememberMe}>Remember Me</SuperCheckbox>
         <NavLink to={'/passwordrecovery'}>Forgot Password</NavLink>
         <SuperButton onClick={onclickHandler}>Login</SuperButton>
         <NavLink to={'/'}>Register</NavLink>
       </div>
    )
}