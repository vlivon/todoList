import React, { useContext, useState } from 'react';
import storeAPI from '../utils/storeAPI';

import Task from './Task';

const Card = ({item}) => {
    // debugger;
    const {onChangeTitle, addNewTask, onDeleteCard } = useContext(storeAPI);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(item.title);
    const [inputTask, setInputTask] = useState('');

    const onOpen = () => {
        setOpen(prev => !prev)
    }

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }

    return (
        <div className="card">
            <header>
                {!open ?
                    <>
                        <h3>{item.title}</h3>
                        <button onClick={onOpen}>Change title</button>
                        <button onClick={() => onDeleteCard(item.id)}>Delete card</button>
                    </>
                :
                    <>
                        <input onChange={onChangeInput} value={input} placeholder="Enter title here..."></input> 
                        <button onClick={() => {onChangeTitle(input, item.id); setOpen(prev => !prev)}} className="but">End change title</button>
                    </>
                }
            </header>
            <hr />
            <div>
                <input onChange={onChangeInputTask} value={inputTask} placeholder="Enter task here..."></input>
                <button onClick={() => {addNewTask(item.id, inputTask); setInputTask('')}}>Add task</button>
                {item.tasks.map((task, index) => (
                    <Task task={task} cardId={item.id} index={index} />
                ))} 
            </div>
        </div>
    )
}

export default Card;
