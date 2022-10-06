import React from 'react'
import { useState } from 'react';

const Task1 = () => {
    const [state,setState] =useState({
        items: [],
        DataisLoaded: false
    });
    const fetchData=()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
                    .then((res) => res.json())
                    .then((json) => {
                      setState({items: json,
                            DataisLoaded: true
                        });
                    })
                  }
    // useEffect=(()=>{
    //   fetchData();
    // },[])
    
    
    const { DataisLoaded, items } = state;
    if (!DataisLoaded) return <header className="App-header"> <button className="App-btn" onClick={fetchData}> Pleses Press to load Data </button> </header> 
      return (
        <div className="App" style={{color:"black"}}>
          <header className="App-header">
               <h3> Fetch data from an api in react </h3>
            <table className="styled-table">
              <thead>
                <tr>
                <td>Id</td>
                <td>User_Name</td>
                <td>Full_Name</td>
                <td>User_Email</td>
                </tr>
     
              </thead>
              <tbody>
           {
                    items.map((item) => ( 
                    <tr key = { item.id } >
                      <td> { item.id }</td>
                      <td>{ item.username }</td>
                      <td>{ item.name }</td>
                      <td>{ item.email } </td>
                        </tr>
                    ))
                }
                </tbody>
          </table>
          </header>
          
        </div>
      );
}

export default Task1