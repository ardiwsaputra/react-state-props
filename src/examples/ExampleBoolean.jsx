import { useState } from 'react';
import Button from '../components/Button';

function ExampleBoolean() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(prevState => !prevState);
  };

  // const toggleActive = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <div>
      <Button onClick={toggleActive}>
        {isActive ? 'Active' : 'Inactive'}
      </Button>
    </div>
  );
}

export default ExampleBoolean;