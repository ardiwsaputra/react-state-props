import { useState } from 'react';
import Typography from '../components/Typography';

function ExampleString() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='flex flex-col space-y-5'>
      <input type="text" value={name} onChange={handleNameChange} 
        className='p-5 rounded w-96 bg-white'
      />
      <Typography>Hasil Input, {name}!</Typography>
    </div>
  );
}

export default ExampleString