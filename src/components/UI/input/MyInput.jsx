import React from 'react'
import classes from './MyInput.module.css'

//прокидывание рефа. Оборачиваем в React.forwardRef
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref}
            className={classes.myInput} {...props} />
    )
})

export default MyInput
