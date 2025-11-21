import { useState } from "react"; //this is for my practice-


function Car(){
    //object 
    const [car, setCar] = useState(
        {
            year: 2023,
            make: "Polestar",
            model: "Polestar-2"
        }
    )

    function OnMakeChange( e ){
        setCar(c => ({...car, make: e.target.value}));    
    };

    function OnYearChange( e ){
        setCar(c => ({...car, year: e.target.value}));    
    };

    //another way to write function.
    const OnModelChangeTest = (e) => {
        setCar(c => ({...car, model: e.target.value})); 
    }

     
    return(
        <>
        <p> My favorite car brand is  {car.make} and model is {car.model}  and  model year is {car.year}
                        </p>

        <input placeholder="enter the year" onChange={OnYearChange}></input>  <br/> <br/>
        <input placeholder="enter the model" onChange={OnModelChangeTest}></input> <br/><br/>
        <input placeholder="enter the brand" onChange={OnMakeChange}></input>
        </>
    )
}

export default Car;