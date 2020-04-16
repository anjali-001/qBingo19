import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import { DisplayContext } from '../DisplayContext';
import logo from '../logo.png';

function Buttons(){
    const {resetGame} = useContext(DisplayContext); 
    
        return(
            <React.Fragment>
                <img src={logo} className="img-fluid logo"  alt="logo"/>
                <button className="btn btn-primary mr-2" onClick={()=>resetGame()}>
                <Link to="/" className="text-light"> Click for Normal</Link>
                </button>
                <button className="btn btn-primary mr-2" onClick={()=>resetGame()}>
                <Link to="/plus" className="text-light"> Click For +1</Link>
                </button>
                <button className="btn btn-primary mr-2" onClick={()=>resetGame()}>
                <Link to="/minus" className="text-light"> Click For -1</Link>
                </button>
                <button className="btn btn-primary p-1 ml-3" onClick={()=>resetGame()}>Reset Game</button>

            </React.Fragment>
        )
    
}
export default Buttons;

