import React, {useContext} from 'react';
import {DisplayContext} from '../DisplayContext';


const DisplayMinus = () => {
    const {arr,calledOut,generateNum,randomNum} = useContext(DisplayContext);
    return ( 
        <div className="container mx-auto text-center">
            <div className="row ">
            {arr.map(item=>{
                return (

                <div key={item} className={calledOut.includes(item)?"found text-center col-1 p-1 m-1":"notfound p-1 m-1 col-1 text-center "}>{item}</div>
                
                
            )
            })}
            </div>
            <div className="mx-auto text-center mt-3">
            <button onClick={()=>generateNum()} className="btn btn-success text-capitalize btn-generate">generate num</button>
            <h3>{randomNum==null?"Start":(randomNum==90?"1":randomNum+1)}</h3>
            </div>
            </div>
     );
}
 
export default DisplayMinus;