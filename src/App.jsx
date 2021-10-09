
import React, { useState } from 'react';
import { useApp } from './hooks/useApp';
import StoreAPI from './utils/storeAPI';
import Card from './components/Card';

function App () {
  const [input, setInput] = useState('');
  
  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  const {
    data,
    onChangeTitle,
    onChangeText,
    onChangeChecked,
    addNewTask,
    onDeleteTask,
    onDeleteCard,
    newCard
  } = useApp();
  console.log('-------data------')
  console.log(data)
  return (
    <StoreAPI.Provider value={{
      onChangeTitle,
      onChangeText,
      onChangeChecked,
      addNewTask,
      onDeleteTask,
      onDeleteCard,
      newCard}}>
      <div className="main">
        <header>
          <h1>TRELLO GLIST</h1>
        </header>
        <div className="cards">
          {data.map((item, index) => (
            <Card item={item} index={index}/>
          ))}
        </div>
        <div>
          <input onChange={onChangeInput} value={input} placeholder='Enter title of card'></input>
          <button onClick={() => {newCard(input); setInput('')}}>Add new card</button>
        </div>
      </div>
    </StoreAPI.Provider>
  )
}

export default App;