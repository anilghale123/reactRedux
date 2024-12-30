import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './redux/todoSlice';
import CardList from './Component/Card';


function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

 const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };
    const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };
  
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

    <CardList />
    </>
  );
}

export default App;