
import React, { useState } from 'react';
import store from './utils/store';
import Task from './components/Task';


function App () {

  const [data, setData] = useState(store);
  const [input, setInput] = useState('');

  const onChangeTitle = (input, id) => {
    let u = input;
    console.log(data)
    setData(prev => prev.map(item => {
      
      if (item.id === id) {
        return {
          ...item,
          title: u
          
        }
      };
      
      return item;
      
    }
      
    ))
  }

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  const onChangeChecked = (id) => {
    setData(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked
        }
      };
      return item;
    }
      
    ))
  }

  const addNewTask = () => {
    if (input !== '') {
      setData((prev) => [
        ...prev,
        {
          "id": prev[prev.length - 1].id + 1,
          "title": input,
          "checked": false
        }
      ])
      setInput('');
    } else {}
  }

  const onDelTask = (id) => setData(prev => prev.filter(item => item.id !== id))

  return (
    <div className="main">
      <div className="header">
        <h1>TODOGLIST</h1>
        <input onChange={onChangeInput} value={input} placeholder="Enter task here..."></input>
        <button onClick={addNewTask}>Add task</button>
      </div>
      <div className="tasks">
        {data.map((item) => (
          <Task
            title={item.title}
            id={item.id}
            checked={item.checked}
            onChangeChecked={onChangeChecked}
            onDelTask={onDelTask}
            onChangeTitle={onChangeTitle}
          /> 
        ))}
      </div>

    </div>
  )
}

export default App;