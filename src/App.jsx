import React from 'react'
import User from './components/User'
import Colorchange from './components/Colorchange'

function App() {
  const day ={
    Greet:"welcome"
  }

  return (
    <div>
      <h1 className='text-center text-3x1 font-bold text-indigo-500'> Welcome To React Redux</h1>
    <User  props={day}/>
<Colorchange/>
    </div>
  )
}

export default App