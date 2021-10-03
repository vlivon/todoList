import React, { useState } from 'react'


const Task = ({checked, id, title, onChangeChecked, onDelTask, onChangeTitle }) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(title);

    const onOpen = () => {
        setOpen(prev => !prev)
    }

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }
    return (
        <div className="items">
            <input className="inp" onChange={() => onChangeChecked(id)} type="checkbox" checked={checked} />
            {!open ?
                <>
                    <p>{title}</p>
                    <button onClick={onOpen} className="but">Change task</button>
                </>
            :
                <>
                    <input onChange={onChangeInput} value={input} placeholder="Enter task here..."></input> 
                    <button onClick={() => {onChangeTitle(input, id); setOpen(prev => !prev)}} className="but">End change</button>
                </>   
            }
            
            <button className="but" onClick={() => onDelTask(id)}>Delete task</button>
        </div>
    )
}

export default Task;