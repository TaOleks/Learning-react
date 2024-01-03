import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton '

function Login() {
  return (
    <div>
        <h1> Page for autorization</h1>
         <form> 
            <MyInput type='text' placeholder='Add login'/>
            <MyInput type='password' placeholder='Add password'/>
            <MyButton>Enter </MyButton>
         </form>
    </div>
  )
}

export default Login