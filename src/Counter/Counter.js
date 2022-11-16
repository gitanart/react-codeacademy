import {useEffect, useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0); //[count, setCount]
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleIncrement = () => {
         setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount ( count - 1);
        
    }

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
           .then(response => response.json())
           .then(json => {
            setTodo(json);
            setIsLoading(false);
           })
           .catch(() => {
            setIsLoading(false);
           });
    }, []);

    console.log(todo);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <span>{count}</span>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <div>{todo?.title}</div>
            <div>{String(todo?.completed)}</div>
        </>
    )
}