import React, { useContext } from 'react'
import { MyButton, MyInput } from '../components/index'
import { AuthContext } from '../context'

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className="loginPage">
            <h1>LOGIN PAGE</h1>
            <form className="loginPage-form" onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин..." />
                <MyInput type="password" placeholder="Введите пароль..." />
                <MyButton>Войти</MyButton>
            </form>

        </div>
    )
}

export default Login
