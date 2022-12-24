import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { MyButton } from '../../index'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__links">
                        <Link className="navbar__links--item" to="/posts" >Posts</Link>
                        <Link className="navbar__links--item" to="/about" >About</Link>
                    </div>
                    {isAuth &&
                        <div className="navbar__btn">
                            <MyButton onClick={logout}>Выйти</MyButton>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
