import React from 'react'
// import axios from 'axios'
import { useEffect, useState } from "react";
import './Tsble.css';
// import { Button } from 'react-bootstrap';
import Button from '@mui/material/Button';
// import json from 'json';

function Table() {
    const [Data, setData] = useState([]);
    //axios not working i dont know why
    // setData(axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>{res.json()}));
    //tried fetch api instead
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(
            (result) => {
              setData(result);
            }
          )
      }, [])

      function clickHandler(){

      }
      function editHandler(){

    }

  return (
      //learnt map on objects
      <>
    {
        //-------practice data representation----------
    /* <div>
        {Data.length?
        Data.map(data=><div>{data.title}</div>)
        :null}
    </div> */}
    <div className='Table'>
    {/* <Button as="input" type="button" value="Input" /> */}
    {/* <Button variant="contained">Contained</Button> */}
        <div className='flex-container'>
        <input type='text' placeholder='search User'></input>
        <button onClick={() => clickHandler }>Add User</button>
        </div>
        <div>
        <table className='Table-inner'>
                <tr>
                    <th>ID</th>
                    <th>userID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                {
                    Data.map(data =>{
                        return(
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.userId}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <button onClick={() => editHandler }>...</button>
                            </tr>
                        )
                    })
                }
        </table>
        </div>
    </div>
    </>
  )
}

export default Table