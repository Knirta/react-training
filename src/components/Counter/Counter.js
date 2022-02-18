import { useState } from "react";

function makeCounting() {
    console.log('make counting for initial state');
    return Math.trunc(Math.random() * 20);
}

const Counter = () => {
    const [counter, setCounter] = useState(() => makeCounting());
    const [state, setState] = useState({
        title: 'Some title',
        date: Date.now()
    });

    function increment() {
        setCounter(prev => prev + 1);
    }

    function decrement() {
        setCounter(prev => prev - 1);
    } 

    function updateTitle() {
        setState(prev => ({
          ...prev,
          title: "New title"
        }))
    }

    return (
<>
 <h1>Counter: {counter}</h1>
 <button className="btn btn-outline-primary" onClick={increment}>Increase</button>
 <button className="btn btn-outline-secondary" onClick={decrement}>Reduce</button>
 <button className="btn btn-outline-success" onClick={updateTitle}>Change title</button>

 <pre>{JSON.stringify(state, null, 2)}</pre>
</>
    )

}

export default Counter;