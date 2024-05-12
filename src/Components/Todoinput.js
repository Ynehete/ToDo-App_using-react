import React, { useState } from 'react';

function Todoinput(props) {
    const[inputtext,setInputtext]=useState('');
    return (
        <div className='input-container'>
            <input type='text' 
            className='input-box-todo' 
            placeholder='Enter the Todo Task'
            value={inputtext}
            onChange={e=>{
                setInputtext(e.target.value)
            }}></input>
            <button className='add-btn' onClick={()=>{
                props.addIntoList(inputtext)
                setInputtext("")
            }}>+</button>
           
        </div>
    );


}
export default Todoinput;