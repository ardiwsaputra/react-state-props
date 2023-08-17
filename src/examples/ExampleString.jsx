import { useState } from 'react';
import Typography from '../components/Typography';

function ExampleString() {
  const [name, setName] = useState('Contoh');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='flex flex-col space-y-5'>
      <input type="text" value={name} onChange={handleNameChange} 
        className='p-5 bg-white rounded w-96'
      />
      <Typography>Hasil Input, {name}!</Typography>
    </div>
  );
}

export default ExampleString