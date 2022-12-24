import { PostIdPage, Posts, About, Login } from "../pages/index";

export const privateRoutes = [
    { path: '/about', component: About, exact: true },
    { path: '/posts', component: Posts, exact: true },
    { path: '/posts/:id', component: PostIdPage, exact: true },
]

export const publicRoutes = [
    { path: '/login', component: Login, exact: true },
]