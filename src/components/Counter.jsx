import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count-1);
    }

    function resetCount(){
        setCount(0);
    }

    return(
        <div>
            <h2>Employee Count : {count}</h2>
            <button onClick={increment}>Add Employee</button>
            <button onClick={decrement}>Remove Employee</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default Counter;