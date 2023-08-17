import { useState } from 'react';
import Typography from '../components/Typography';
import Button from '../components/Button';

function ExampleArray() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className='flex flex-col space-y-2'>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}><Typography>{`${index+1}. ${todo}`}</Typography></li>
        ))}
      </ul>
      <Button onClick={() => addTodo('Tidur')}>Add Todo</Button>
    </div>
  );
}

export default ExampleArray