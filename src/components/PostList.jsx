import React from 'react'
import { PostItem } from '../components/index'

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <h1>Посты не найдены</h1>
        )
    }

    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem
                    remove={remove}
                    key={post.id}
                    number={index + 1} post={post} />
            )}
        </div>
    )
}

export default PostList
