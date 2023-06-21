import { useState } from 'react';
import Typography from '../components/Typography';

function ExampleObject() {
  const [person, setPerson] = useState({ name: '', age: 0 });

  const handleNameChange = (event) => {
    setPerson({ ...person, name: event.target.value });
  };

  const handleAgeChange = (event) => {
    setPerson({ ...person, age: parseInt(event.target.value) });
  };

  return (
    <div className='flex flex-col space-y-5'>
      <input className='p-5 rounded w-96 bg-white' type="text" value={person.name} onChange={handleNameChange} />
      <input className='p-5 rounded w-96 bg-white' type="number" value={person.age} onChange={handleAgeChange} />
      <Typography>Name: {person.name}</Typography>
      <Typography>Age: {person.age}</Typography>
    </div>
  );
}

export default  ExampleObject