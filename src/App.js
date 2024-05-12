import React, { useState } from 'react';
import './App.css';
import Todoinput from './Components/Todoinput';
import TodoList from './Components/TodoList';
function App()
{
  const[todolist,setTodoList]=useState([]);
  let addIntoList=(inputText)=>
  {
     setTodoList([...todolist,inputText]);
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...todolist];
    newListTodo.splice(key,1);
    setTodoList([...newListTodo])
  }
return(
  <div className='main-container'>
    <div className='center-container'>
      <Todoinput addIntoList={addIntoList}/>
      <h1 className='app-heading'>TODO LIST</h1>
      <hr></hr>
      
       {
       todolist.map((listItem,i)=>{
         return(
           <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}></TodoList>
        );
       })
      }
      
    </div>
  </div>
);
}
export default App