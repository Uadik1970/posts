import React, { useEffect, useRef, useState } from 'react';

import PostService from '../API/PostService';
import { PostList, PostForm, PostFilter, MyButton, Loader, MyModal, MySelect, Pagination } from '../components/index';
import { useFetching, useObserver, usePosts } from '../hooks/index';
import { getPageCount } from '../utils/pages';

import '../styles/App.css'

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: "", query: "" })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="posts">
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <div className="posts__sort">
                <div className="posts__sort-content">
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter} />
                    <MySelect
                        onChange={value => setLimit(value)}
                        value={limit}
                        defaultValue={"Подгружать по:"}
                        options={[
                            { value: 5, name: "5" },
                            { value: 10, name: "10" },
                            { value: 25, name: "25" },
                            { value: -1, name: "Все" },
                        ]} />
                </div>
            </div>
            <div className="add-post-btn">
                <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
            </div>
            {postError &&
                <h1>Произошла ошибка {postError}</h1>}
            <PostList remove={removePost}
                posts={sortedAndSearchedPosts}
                title={"Посты"} />
            <div ref={lastElement} className="lastElement"></div>
            {isPostsLoading &&
                <Loader />
            }
            <Pagination page={page}
                changePage={changePage}
                totalPages={totalPages} />
        </div>
    );
}

export default Posts;
