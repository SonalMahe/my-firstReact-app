import { useState } from "react";

function OnChange(){

    const [name, setName] = useState("Guest");
    function OnInputChange(e){
        setName(e.target.value);
    }
    //for quantity:
    const [quantity, setquantity] = useState(0);
    function OnQuantityChange(e){
        setquantity(e.target.value);
    }

    //for quantity:
    const [comment, setComment] = useState("");
    function OnCommentChange(e){
        setComment(e.target.value);
    }

     //for Payment:
    const [payment, setPayment] = useState("");
    function OnPaymentChange(e){
        setPayment(e.target.value);
    }

    //for Shipping:
    const [shipping, setShipping] = useState("Pick-up");
    function OnShippingChange(e){
        setShipping(e.target.value);
    }

    return(
        <>
        <h2>Test onChange event</h2>
        <input type="text" onChange={OnInputChange}></input>
        <h6> Welcome: {name}</h6>
        <br/>
        <input type="text" onChange={OnQuantityChange}></input>
        <h6> Qunatity: {quantity}</h6>
        <br/>
        <textarea value={comment} placeholder="enter delivery address"
        onChange={OnCommentChange}></textarea>
        <h6> Comment: {comment}</h6>
        <br/>
        <select value={payment} onChange={OnPaymentChange}>
            <option value=""> Select payment options</option>
            <option value="Visa"> Visa</option>
            <option value="Debit card"> Debit card</option>
            <option value="Swish"> Swish</option>
        </select>
        <p> Payment selected: {payment}</p>
        <label>
            <input type="radio" value="Pick-up" checked={shipping === "Pick-up" }
            onChange={OnShippingChange}/>
            Pick-up
        </label>
        <label>
            <input type="radio" value="Delivery" 
            checked={shipping === "Delivery" }
            onChange={OnShippingChange}/>
            Delivery
        </label>
       <p>Shipping: {shipping}</p>
        </>
    )
}

export default OnChange;