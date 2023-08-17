import { useState } from 'react';
import Typography from '../components/Typography';

const FIELD_NAME = {
  name: 'nama',
  age: 'age',
}

function ExampleObject() {
  const [person, setPerson] = useState({ [FIELD_NAME.name]: '', age: 0 });

  // const handleNameChange = (event) => {
  //   setPerson({ ...person, name: event.target.value });
  // };

  // const handleAgeChange = (event) => {
  //   setPerson({ ...person, age: parseInt(event.target.value) });
  // };

  const handleInputChange = (event) => {
    console.log(event)
    // const { name, value } = event.target;
    setPerson({ ...person, [event.target.name]: event.target.value });
  }

  return (
    <div className='flex flex-col space-y-5'>
      <input name={FIELD_NAME.name} className='p-5 bg-white rounded w-96' type="text" value={person[FIELD_NAME.name]} onChange={handleInputChange} />
      
      <input name="age" className='p-5 bg-white rounded w-96' type="number" value={person.age} onChange={handleInputChange} />
      <Typography>Name: {person[FIELD_NAME.name]}</Typography>
      <Typography>Age: {person.age}</Typography>
    </div>
  );
}

export default  ExampleObject