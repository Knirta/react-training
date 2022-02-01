import { useState } from 'react';
import shortid from 'shortid';
import { VscTrash } from "react-icons/vsc";
import s from './App.module.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') { return; }

    const newItem = {
      id: shortid.generate(),
      text
    }
    
    setItems(prevState => [...prevState, newItem]);
    setText('');
  }
  
  const deleteItem = (delId) => {
    setItems(prevState => prevState.filter(({ id }) => id !== delId));
  }

  return (
    <div className={s.container}>
      <h1 className={s.heading}>Your tasks</h1>
      {items.length ? (
        <ul className={s.list}>
          {items.map(({ id, text }) => (<li key={id} className={s.item}>{text} <VscTrash className={s.iconDelete} onClick={() => deleteItem(id)}/></li>))}
        </ul>
      ) : (
          <p>there are no items yet..</p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Enter your task: 
          <input value={text} onChange={handleInput} />
        </label>
        <button type="submit">Add task #{items.length + 1 }</button>
      </form>
    </div>
  );
}

export default App;
