import React, { useState, useEffect } from 'react'
import db from './firebase';
import './Tracking.css';
import { useParams } from 'react-router-dom';
import { doc, onSnapshot, collection, query, where, addDoc} from "firebase/firestore";
function ListElement({name, price}) {

  return (
    <li>
        <span>{name}</span>
        <span>{price}</span>
    </li>
  )
}





function Tracking() {
    const {username} = useParams(); 
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

        // const docref1 = await db.collection('users').doc(id);
        // const docSnap = await docref1.get();
        // const oldTotExpense = docSnap.get('totalExpenses');

        // docref1.update({totalExpense : oldTotExpense + cost});
        
        console.log("we here???");
        setPopupOpen(!isPopupOpen);


        updateItem('');
        updateCost('');
        setCostState(false);

        let l = [];
        for (let i=0; i < prices.length; i++) {
            l.push([example[i], prices[i]]);
        }

        setCombined(l);

        update();

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


        let tmp1 = [];
        for (let i=0; i < combined.length;i++) {
            if (combined[i][0] == item) {
                const l = 0; //we ain't doing shit
            } else {
                tmp1.push(combined[i]);
            }
        }

        setCombined(tmp1);

        update();
    }


    const [example, setExample] = useState([]);
    const [prices, setPrices] = useState([]);

    const [combined, setCombined] = useState([]);

    const [totcost1, settotcost] = useState(0);

    const update = async () => {
        setCombined([]);
        

        console.log("\n\n\n\n\n\nStart of update!!!!");
        const d = await db.collection('users').where('username', '==', username).get();
        
        const id = d.docs[0].id;

        console.log(id);

        const ourIDS = await db.collection('users').doc(id).collection('expenses').get();

        console.log("ourDS");
        console.log(ourIDS.docs);


        let l = [];
        let totcost = 0;
        for(let i=0;i<ourIDS.docs.length;i++) {
            // console.log(deleteID.id);
            // console.log(ourID);
            // const docref = await db.collection('users').doc(id).collection('expenses').doc(ourID.id);
            // const docSnap = await docref.get();

            const tmpcost = ourIDS.docs[i].data().cost;
            const tmpname = ourIDS.docs[i].data().name;

            console.log("bro load plssss");
            console.log(tmpcost);
            console.log(tmpname);

            setExample((example) => [...example, tmpname]);
            setPrices((prices)=>[...prices, tmpcost]);
            console.log(i)

            l.push([tmpname, tmpcost]);
            totcost += Number(tmpcost);
        }

        setCombined(l);



        const docref1 = await db.collection('users').doc(id);
        const docSnap1 = await docref1.get();
        docref1.update({totalExpense : totcost});
        settotcost(totcost);

    }

    useEffect(() => {
        db.collection('users').where('username', '==', username).onSnapshot(snapshot => {
            update();
            setCombined(combined);
            console.log("received change, calling function");
          
          });
    }, []);
    





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
            <h2 style={{ textAlign: 'center'}}> Total Expenses: {totcost1} </h2>



            {/* {(!isPopupOpen && !isPopupOpen1) && ( */}
           { prices && <ul>
                {/* {console.log("prices here!!!!:")}
                {console.log(prices)}
                {console.log(example)} */}
                
                {console.log(combined)}
                {combined.map((exs) => <ListElement name = {exs[0]} price={exs[1]}/>)}
            </ul>}



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
