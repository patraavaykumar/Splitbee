import React from 'react'
import { NavBar } from './NavBar'
import style from "./home.module.css"
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { First } from '../home/First';
import { Logo } from '../home/Logo';
import { Second } from '../home/Second';
import { Third } from '../home/Third';
import { Fourth } from '../home/Fourth';

export const Home = () => {
  return (
   <>
   <div className={style.homePage}>
   <NavBar/>
   <div className={style.heading}>
<h1>The analytics platform you’ll love.</h1>
<h2 style={{color:"darkgrey"}}>
<span>Track and optimize your online business with Splitbee.</span>
<span>Your friendly analytics & conversion platform.</span>
</h2>
<Link to="/addWebsite"><button>Add to your website</button></Link>
<div style={{color:"darkgrey"}}><span>No credit card required</span></div>

<First />

</div>

</div>
 <Logo />
<Second />
<Third />
<Fourth />

<Footer/>

   </>
  )
}
