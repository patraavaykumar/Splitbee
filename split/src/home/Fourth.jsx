import React from 'react'
import style from "./fourth.module.css"
import { Svg } from './Svg'

export const Fourth = () => {
  return (
    <>
  <div className={style.container}>
  <h3>Why people love Splitbee</h3>
        <svg id={style.slant} width="99vw" height="35" fill="none" class="w-full"><path d="M0 0v35L1441 0H0z" fill="#fff"></path></svg>
            <div id={style.third}>
                <div id={style.heart}>
                    <div class="relative flex justify-center items-center"><Svg data="Why People Love Splitbee"/>
                    {/* <h3 class="absolute mt-2 container text-4xl font-bold text-center text-gray-700 font-inter" style="text-shadow: rgb(247, 250, 252) 0px 0px 15px;">Why people love Splitbee</h3>     */}
                </div>
                </div>
                <div id={style.block_one}>
                    <div id={style.b_one}>
                        <p className={style.para}><b>Splitbee is a game changer.</b> How did I not know <br />
                            about it earlier. It's actually the first web analytics that <br /> 
                            works the way I like.</p>
                        <span className={style.name}>Wojtek Mandrysz</span>
                        <pre className={style.position}>Software Architect</pre>
                    </div>
                    <div id={style.b_two}>
                        <p className={style.para}>Very cool: Splitbee provides <b>blazing and <br />
                            beautiful analytics, </b> and with Next.js rewrites avoids <br /> 
                            the third party domain</p>
                        <span className={style.name}>Guillermo Rauch</span>
                        <pre className={style.position}>CEO, Vercel</pre>
                    </div>
                </div>
                <div id={style.block_two}>
                    <div id={style.b_one}>
                            <p className={style.para}>I really like Splitbee. UI is incredibly smooth, <br />
                                installation is easy... So far, <b>the best analytics tool <br /> I've tried!</b></p>
                            <span className={style.name}>Thomas Sanlis</span>
                            <pre className={style.position}>Indie Maker</pre>
                    </div>
                    <div id={style.b_two}>
                            <p className={style.para}><b>I can’t recommend Splitbee enough.</b> Such a smooth <br />
                                user experience packed with necessary features <br /> 
                                without any bloat. </p>
                            <span className={style.name}>Andrey Okonetchnikov</span>
                            <pre className={style.position}>Designer & Developer</pre>
                    </div>
                </div>
            </div>
        <svg id={style.slant_two}width="99vw" height="35" fill="none" class="w-full transform rotate-180"><path d="M0 0v35L1441 0H0z" fill="#fff"></path></svg>
        
    </div>
    </>
  )
}
