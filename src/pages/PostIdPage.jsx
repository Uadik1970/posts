import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { Loader } from '../components/index'
import { useFetching } from '../hooks/index'

const PostIdPage = () => {
    // хук для выцепления параметра из URL
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div className="userPage">
            <h1>Страница пользователя с id:{params.id}</h1>
            {isLoading
                ? <Loader />
                : <div className="userPage__title">{post.id}{post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Loader />
                : <div className="userPage__comments">
                    {comments.map(c =>
                        <div key={c.id}>
                            <h5>{c.email}</h5>
                            <div>{c.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage
