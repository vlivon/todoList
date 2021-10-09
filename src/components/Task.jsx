
import React, { useState, useContext } from 'react'
import storeAPI from '../utils/storeAPI';


const Task = ({task, cardId}) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(task.text);
    const {onChangeChecked, onDeleteTask, onChangeText} = useContext(storeAPI);

    const onOpen = () => {
        setOpen(prev => !prev)
    }

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }
    return (
        <div className="items">
            <input onChange={() => onChangeChecked(task.id, cardId)} type="checkbox" checked={task.checked} />
            {!open ?
                <>
                    <p>{task.text}</p>
                    <button onClick={onOpen} className="but">Change task</button>
                </>
            :
                <>
                    <input onChange={onChangeInput} value={input} placeholder="Enter task here..."></input> 
                    <button onClick={() => {onChangeText(input, task.id, cardId); setOpen(prev => !prev)}} className="but">End change</button>
                </>   
            }
            <button className="but" onClick={() => onDeleteTask(task.id, cardId)}>Delete task</button>
        </div>
    )
}

export default Task;