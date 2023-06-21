import { useState } from 'react';
import Button from '../components/Button';

function ExampleBoolean() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <Button onClick={toggleActive} variant={isActive ? 'error' : 'primary'}>
        {isActive ? 'Active' : 'Inactive'}
      </Button>
    </div>
  );
}

export default ExampleBoolean;