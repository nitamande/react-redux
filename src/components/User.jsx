


import React,{useState} from 'react';
import {createStore} from 'redux'


function User({props}) {

  const [value,setValue]=useState("")

  const reducer = (state=value,action)=>{

   if(action.type=="login"){
    return state ="Login Success";
  }
  else{
    return state="Login Fail"
  }
}
  const  store= createStore(reducer);
  store.subscribe(()=>{

   // alert(store.getState());
  const res=store.getState();
//setValue(store.getState())
setValue(res)

  })
  


  return (
    <div>
      <h1 className='text-center text-4x1 font-bold text-red-500'>{props.Greet}CNC WEB WORLD</h1>
       <h2 className='text-center text-4x1 font-bold text-red-500'>{value}</h2>
      
      <button className='bg-blue-600 rounded px-3 py-2  ms-8 font-bold text-white' 
      onClick={()=>store.dispatch({
        type:"login"//action

      })}>Login</button>
    
    </div>
  )
}

export default User

// props
//import React from 'react'

//function User({props}) {
  
//return (
   
// <div>
     
// <h1 className='text-center text-2x1 font-bold text-red-500'>{props.Greet}CNC WEB WORLD</h1>
   
// </div>
 
// )

//}



//export default User


