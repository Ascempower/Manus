// Test file to verify React types are working
import { useEffect, useState } from 'react';

// This should compile without errors if React types are working
function TestComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Effect running');
  }, []);

  return null;
}

export default TestComponent;