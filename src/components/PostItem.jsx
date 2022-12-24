import React from 'react'
import { useHistory } from 'react-router-dom'
import { MyButton } from '../components/index'

const PostItem = ({ number, remove, post }) => {
    const router = useHistory()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <div className="post__btns-item">
                    <MyButton onClick={() => router.push(`/posts/${post.id}`)}>
                        открыть
                    </MyButton>
                </div>
                <div className="post__btns-item">
                    <MyButton onClick={() => remove(post)}>удалить</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem
