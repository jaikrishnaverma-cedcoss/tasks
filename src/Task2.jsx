import React, { useRef } from 'react'
import { useState } from 'react';

const Task2 = () => {
    const refinput=useRef()
    const [state,setState] =useState({
        items: [],
        DataisLoaded: false,
        username:""
    });
    const fetchData=()=>{
  let rl='https://api.github.com/users/'+refinput.current.value;
      fetch(rl)
                    .then((res) => res.json())
                    .then((json) => {
                      setState({items: json,
                            DataisLoaded: true
                        });
                    })
                  }
                  console.log(state.items)
    const { DataisLoaded, items } = state;
return( 
      <>
      <div className="row">
      <div className="App-header w30">
        <h3>Get Github Users Details</h3>
        <input type="text" ref={refinput} placeholder="Github Username" name='username'/>
       <button className="App-btn" onClick={fetchData}>Get Details</button> 
       </div> 

        <div className="App w70" style={{color:"black"}}>
          <header className="App-header">
               <h3> Fetch data from github api in react </h3>
            <table className="styled-table">
              <thead>
                <tr>
                <td colSpan={2}>User Details</td>
                </tr>
     
              </thead>
              <tbody>
           {
             Object.keys(items).map((keys, index) =><tr key={keys}><td>{keys}</td><td>{items[keys]}</td></tr>)
 }
                </tbody>
          </table>
          </header>
          
        </div>
        </div>
        </>
      );
}

export default Task2