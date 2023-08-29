import React from 'react'
import { Link } from 'react-router-dom'
import style from "./signin.module.css"


export const SignIn = () => {
  return (
    <>
  
        <div className={style.formContainer}>
      
        <div className={style.formWrapper}>
        <Link to="/"><p>Back</p></Link>
      
          <form>
          
            <input type="text" placeholder='Enter name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor='file'>
            </label>
            <button>sign in</button>
           <h5>or</h5>
           <button className={style.whiteButton} >Sign in with google</button>
           <button className={style.whiteButton} >Sign in with twiter</button>
          </form>

        </div>



      </div>



    </>
  )
}
