import React from 'react'

const Task = ({id, title, checked, handleDelete, onClickChecked}) => {


    

    return (
        <div className="tasks">
            <input onChange={() => onClickChecked(id)} type="checkbox" checked={checked} />
            <p>{title}</p>
            <button onClick={() => handleDelete(id)}>delete</button>
        </div>
    )
}
export default Task;