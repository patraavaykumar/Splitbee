import React from 'react'
import style from "./logo.module.css"

export const Logo = () => {
  return (
    <>
        <section className={style.logo}>
        <div>
        <div>Trusted by more than 8208 websites and apps</div>
        <div className={style.images}>
            <img alt='logo' src='https://splitbee.io/company-logos/otovo.png' />
            <img alt='logo2' src='https://splitbee.io/company-logos/graph-cdn.png' />
            <img alt='logo3' src='https://splitbee.io/company-logos/gikken.png' />
            <img  alt='logo4' src='https://splitbee.io/company-logos/boehringer.png'/>
            <img  alt='logo5' src='https://splitbee.io/company-logos/zetland.png'/>
            
        </div>
        </div>
            

        </section>
    </>
  )
}
