import { useState, useEffect } from "react";

const Resourses = () => {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0, y:0
    });

    console.log('component render');

    const mouseMoveHandler = e => setPos({
        x: e.clientX,
        y: e.clientY
    });

    useEffect(() => {
        console.log('useEffect render');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setData(json));
        return () => {
            console.log("clean function");
        }
    }, [type]);

    useEffect(() => {
        console.log('ComponentDidMount');

        window.addEventListener('mousemove', mouseMoveHandler );
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);
    
    return (
        <>
        <h1 className="display-1">Resourse: {type}</h1>

        <button className="btn btn-outline-primary" onClick={() => setType('users')}>Users</button>
        <button className="btn btn-outline-primary" onClick={() => setType('todos')}>Todos</button>
        <button className="btn btn-outline-primary" onClick={() => setType('posts')}>Posts</button>
        <pre>{JSON.stringify(pos, null, 2)}</pre>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

export default Resourses;