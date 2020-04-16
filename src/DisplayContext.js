import React, { Component, createContext } from 'react';

export const DisplayContext = createContext();
class DisplayContextProvider extends Component {
    constructor(){
        super()

        this.state = {
            arr: [],
            calledOut:[],
            randomNum:null
        }
    }


    componentDidMount(){
        let temparr=[];
        for(let i=1; i<=90; i++){
            temparr = [...temparr,i];
        }
        this.setState(()=> {
            return{
                arr:temparr
            }
        })
        }

    generateNum = () =>{
        let num = Math.floor(Math.random()*90)+1;
        while(this.state.calledOut.includes(num))
        { 
           num = Math.floor(Math.random()*90)+1;
         
        }
        this.setState(()=>{
            return{
                randomNum:num,
                calledOut:[...this.state.calledOut,num]
            }
        })
    }

    resetGame = ()=>{
        this.setState(()=>{
            return{
            calledOut:[],
            randomNum:null
            }
        })
    }


    


    render() {
        return (
            <DisplayContext.Provider value={{arr:this.state.arr, generateNum:this.generateNum,randomNum:this.state.randomNum, calledOut:this.state.calledOut, resetGame:this.resetGame}}>
                {this.props.children}
                
            </DisplayContext.Provider>
        )
    }
}

export default DisplayContextProvider;  
