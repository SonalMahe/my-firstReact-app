import { useState } from "react"; //practice -

function Arrays() {

    const [input, setInput] = useState("");
    //initialize the array.
    const [fruit, setFruit] = useState(["Apple", "Banana", "Orange"]);
    // On text change 
    const ChangeInput = (e) => {
        setInput(e.target.value);
    }
    //Added item to array.
    const AddItemToArray = () => {
        if (input !== "") {
            setFruit(f => [...f, input]);
        }
        setInput("");
    }
    
    const removeItem = (index) =>{
        setFruit((f) => f.filter((element,i) => i !== index))
    }

    return (
        <>
            <h2>Shopping cart</h2>
            Enter fruit to add in the list :<input type="text" value={input} onChange={(e) => ChangeInput(e)}></input> <br />
            <button onClick={AddItemToArray}>Add Item</button>
            <ul>
                {fruit.map((item, index) =>
                    <li key={index} onClick={ () => removeItem(index)}>{item}</li>
                )}
            </ul>
        </>
    )
}

export default Arrays;