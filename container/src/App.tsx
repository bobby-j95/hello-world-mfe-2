
import { useEffect, useRef } from 'react';
import './App.css'
import mount from 'helloworld/HelloWorld';

function App() {

  const helloWorldDiv = useRef<HTMLDivElement | null>(null);

  useEffect( () => {
    mount(helloWorldDiv.current);
  }, []);
  return (
    <>
      <h1>This is the Container!</h1>\
      <div ref={helloWorldDiv}></div>
    </>
  )
}

export default App
