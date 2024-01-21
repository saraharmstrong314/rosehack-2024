import React, { useState } from 'react'
import db from './firebase';
import './Tracking.css';
import { doc, onSnapshot, collection, query, where, addDoc} from "firebase/firestore";



const username = 'Jasmine';
function ListElement({name, price}) {


  return (
    <li>
        <span>{name}</span>
        <span>{price}</span>
    </li>
  )
}


function Tracking() {

    const [invalidCost, setCostState] = useState(false);

    const addItems = async() => { 
        //go into root -> users -> file
        //check if there's a collection, if not write another collection in there
        const d = await db.collection('users').where('username', '==', username).get();
        const id = d.docs[0].id;

        if (cost == '') {
            setCostState(true);
            return ;
        }
        await db.collection('users').doc(id).collection('expenses').add({
            name:item,
            cost:cost,
        })
        
        console.log("we here???");
        setPopupOpen(!isPopupOpen);


        updateItem('');
        updateCost('');
        setCostState(false);
    }

    const removeItems = async() => { 
        //go into root -> users -> file
        //write another collection in there
        
        // const d = await db.collection('users').where('username', '==', username).get();
        const d = await db.collection('users').where('username', '==', username).get();
        const id = d.docs[0].id;

        if (cost == '') {
            setCostState(true);
            return ;
        }

        const deletionIDS = await (await db.collection('users').doc(id).collection('expenses').where('name', '==', item).get()).docs;



        console.log("we here at removeItems");
        //console.log(deletionIDS.docs[0].id); //this be each of the ids
        console.log(deletionIDS);

        for (const deleteID of deletionIDS) {
            // console.log(deleteID.id);
            await db.collection('users').doc(id).collection('expenses').doc(deleteID.id).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
        

        setPopupOpen1(!isPopupOpen1);
        updateItem('');
        updateCost('');
        setCostState(false);
    }


    const example = ["Item1", "Item2", "Item3", "4", "5", "6", "7", "8", "9", "10"];


    const [isPopupOpen, setPopupOpen] = useState(false); //applies to add item
    const [isPopupOpen1, setPopupOpen1] = useState(false); //applies to remove item

    const handlePopUp = () => {
      setPopupOpen(!isPopupOpen);
    };

    const handlePopUp1 = () => {
        setPopupOpen1(!isPopupOpen1);
    };
    
    const [item, updateItem] = useState('');
    const [cost, updateCost] = useState('');

    const itemIn = (event) => {
        updateItem(event.target.value);
    };

    const costIn = (event) => {
        const str1 = event.target.value;
        if (!isNaN(str1) && !isNaN(parseFloat(str1))) {
            
            updateCost(event.target.value);
        } else if (str1 == '') {
            updateCost('');
        } else {
            updateCost('');
        }
    };
  
    return (
        <div className="overall">

            {/* {(!isPopupOpen && !isPopupOpen1) && ( */}
            <h3> List of Things </h3>


            {/* {(!isPopupOpen && !isPopupOpen1) && ( */}
            <ul>
                {example.map((exs) => <ListElement name = {exs} price={5}/>)}
            </ul>



            {(!isPopupOpen && !isPopupOpen1) && (
            <div className="buttons">
                <button style={{width: 150, backgroundColor: "blue", fontSize:15, border: "none", color:"white", borderRadius: 8, height:40 }} onClick={handlePopUp}>Add Item</button>
                <button style={{width: 150, backgroundColor: "blue", fontSize:15, border: "none",color:"white", borderRadius: 8, height:40 }} onClick={handlePopUp1}>Remove Item</button>
            </div>
            )}


            {(isPopupOpen || isPopupOpen1) && (
            <div className='center'>
                <div className='centerer'>
                <p style={{marginTop:6, marginBottom:5, fontWeight: "bold", fontSize:20, color: 'gray', }}>Item: </p>
                    <input value={item} onChange={itemIn} />
                </div>

                <br />

                <div className='centerer'>
                    <p style={{marginTop:6, marginBottom:5, fontWeight: "bold", fontSize:20, color: 'gray',}}>Cost: </p>
                    <input value={cost} onChange={costIn} />
                </div>

                
                <div className="buttons1">
                    <button style={{width: 150, backgroundColor: "blue", fontSize:15, border: "none", color:"white", borderRadius: 8, height:40,  }} onClick={isPopupOpen ? addItems : removeItems}>Confirm </button>
                </div>

                {(invalidCost) && (
                    <p style={{textAlign: 'center', color:'red'}}> Invalid Cost!!! </p>
                )}
                
            </div>
            )}

        </div>
    );

}


export default Tracking
