import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../../context'
import { privateRoutes, publicRoutes, } from '../../router/router'
import Loader from './Loader/Loader'

const AppRouter = () => {

    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="container">
            {isAuth
                ?
                <Switch>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact} />
                    )}
                    <Redirect to="/posts" />
                </Switch>
                :
                <Switch>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact} />
                    )}
                    <Redirect to="/login" />
                </Switch>
            }
        </div>
    )
}

export default AppRouter
