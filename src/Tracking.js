import React from 'react'


function Tracking() {

    var a = [];

    return (
        <div style={{display: 'flex', flexDirection: 'column', border: '4px solid #ff0000'}}>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
            </div>


            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap:'8px'  }}>
                <button>Add buttons</button>
                <button>Other button</button>
            </div>
        </div>
    )
}

export default Tracking
