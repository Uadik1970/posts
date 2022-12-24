import React, { useState } from 'react'
import { MyButton, MyInput } from '../components/index'

const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        // предотвращаем дефолтное действие браузера (перезагрузка страницы при сабмите формы)
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form className="post__form">
            <MyInput
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                value={post.title}
                type="text"
                placeholder="Название поста">
            </MyInput>
            <MyInput
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                value={post.body}
                type="text"
                placeholder="Описание поста"></MyInput>
            <div className="add-post-btn">
                <MyButton onClick={addNewPost} >Добавить пост</MyButton>

            </div>
        </form>
    )
}

export default PostForm
