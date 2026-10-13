import Button from "./Button";
import { useState } from "react";

function Product(props) {
    let [counter, setCounter] = useState(0);

    return (
        <>
            <h1>name : {props.name}</h1>
            <p>description : {props.description}</p>
            <p>Price: ${props.price}</p>
            <p>Counter: {counter}</p>
            <button onClick={() => {setCounter(counter++)}} >
                Counter
            </button>
            <Button name="Add to Cart" />
        </>
    );
}

export default Product;