import { useState, useEffect, useRef } from 'react';

const UseRef = () => {
    const [value, setValue] = useState('initial');
    const prevValue = useRef('');
    const renderCount = useRef(1);
    const inputRef = useRef(null);

    useEffect(() => {
      renderCount.current++;
      console.log(inputRef.current.value);
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    const focus = () => inputRef.current.focus();

    return (
        <>
        <h1>Render counts: {renderCount.current}</h1>
        <h1>Last state value: {prevValue.current}</h1>
        <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} defaultValue={value}/>
        <button type="button" className="btn btn-success" onClick={focus}>Focus</button>
        </>
    );
}

export default UseRef;