import React, { useState } from 'react'
import db from './firebase';
import './Tracking.css';



function ListElement({name, price}) {


  return (
    <li>
        <span>{name}</span>
        <span>{price}</span>
    </li>
  )
}


function Tracking() {

    const addItems = () => { 
        //go into root -> users -> file
        //check if there's a collection, if not write another collection in there
        
    }

    const removeItems = () => { 
        //go into root -> users -> file
        //write another collection in there

    }

    const example = ["Item1", "Item2", "Item3", "4", "5", "6", "7", "8", "9", "10"];


    const [isPopupOpen, setPopupOpen] = useState(false);

    const handlePopUp = () => {
      setPopupOpen(!isPopupOpen);
    };

    
    const [item, updateItem] = useState('');
    const [cost, updateCost] = useState('');

    const itemIn = (event) => {
        updateItem(event.target.value);
    };

    const costIn = (event) => {
        updateCost(event.target.value);
    };
  
    return (
        <div className="overall">

            {!isPopupOpen && (
            <h3> List of Things </h3>
            )}

            {!isPopupOpen && (
            <ul>
                {example.map((exs) => <ListElement name = {exs} price={5}/>)}
            </ul>
            )}



            {!isPopupOpen && (
            <div className="buttons">
                <button style={{width: 150, backgroundColor: "blue", fontSize:15, border: "none", color:"white", borderRadius: 8, height:40 }} onClick={handlePopUp}>Add Item</button>
                <button style={{width: 150, backgroundColor: "blue", fontSize:15, border: "none",color:"white", borderRadius: 8, height:40 }} onClick={removeItems}>Remove Item</button>
            </div>
            )}


            {isPopupOpen && (
            <div className='center'>
                <div className='centerer'>
                <p style={{marginTop:0, marginBottom:-5, fontWeight: "bold", fontSize:20, color: 'gray'}}>Item: </p>
                    <input value={item} onChange={itemIn} />
                </div>

                <br />

                <div className='centerer'>
                    <p style={{marginTop:0, marginBottom:-5, fontWeight: "bold", fontSize:20, color: 'gray'}}>Cost: </p>
                    <input value={cost} onChange={costIn} />
                </div>

                
                <div className="buttons1">
                    <button style={{width: 150, backgroundColor: "blue", fontSize:15, border: "none", color:"white", borderRadius: 8, height:40 }} onClick={addItems}>Confirm </button>
                </div>
            </div>
            )}

        </div>
    );

}


export default Tracking
