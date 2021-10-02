import React, { useState } from 'react'
import store from './utils/store';

import Task from './components/Task';

function App () {

  const [data, setData] = useState(store);
  const [input, setInput] = useState('');

  const handleDelete = (id) => setData((prev) => prev.filter((item) => item.id !== id))
  
  const handleAdd = () => {
    if (input === '') {} else {
      setData((prev) => [
          ...prev,
          {
            "id": prev[prev.length-1].id + 1,
            "title": input,
            "checked": false
          }
        ]
        )
    setInput('')}
    
  }

  const onText = (event) => {
    setInput(event.target.value)
  }

  const onClickChecked = (id) => {
      setData(prev => prev.map((item) => {

        if (item.id !== id) {
          return item
        } else {
          return {
            ...item,
            checked: !item.checked
        }
        }
        
      }))
  }

  return (
    <div className="main">
      <div>
        <h1>TODOGLIST</h1>
          <input onChange={onText} value={input} placeholder="aboba" />
          <button onClick={handleAdd}>
            Добавить
          </button>
      </div>
      {data.map((item) => (
          <Task 
            onClickChecked={onClickChecked}
            handleDelete={handleDelete}
            id={item.id}
            title={item.title}
            checked={item.checked}
          />
      )
        
      )}
      
    </div>
  )
}

export default App;