import React from 'react'
import { MyInput, MySelect } from '../components/index'

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск..."
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                value={filter.query} />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка :"
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" }
                ]}
            />
        </div>
    )
}

export default PostFilter
