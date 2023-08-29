import React from 'react'
import { Link } from 'react-router-dom';
import style from "./footer.module.css"

export const Footer = () => {
    return (
        <>

            <div>


                <footer >
                    <section className={style.section}>
                        <div>
                            <h2>Get a taste of Splitbee today.</h2>
                            <h5 style={{ color: 'white' }}>Analyze your traffic. Increase Conversions.</h5>
                            <h6> ✔ Free 2,500 monthly page views</h6>
                            <h6> ✔No credit card required</h6>
                            <Link to="/addWebsite">
                            <button className={style.addButton} >Add to your Website</button>
                            </Link>
                        </div>

                        <div className={style.img}>
                            <span >
                                <img alt="honey image" src="https://splitbee.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhoney-stick.8ef7cc93.png&w=640&q=75
"/>
                            </span>
                        </div>
                    </section>


                    <div  className={style.footer}>
                        <svg viewBox="0 100 1440 200" className="absolute top-0 hidden w-full md:block"><path fill="#fff" d="M0 192l120-5.3c120-5.7 360-15.7 600-16 240 .3 480 10.3 600 16l120 5.3V0H0z"></path></svg>

                        <div className={style.container}>
                        <div>
                            <h6>SplitBee</h6>
                            <span>2023</span>
                        </div>
                        <div>
                            <h6>Product</h6>

                            <Link to="/pricing">
                                <h6>Pricing</h6>
                            </Link>
                            <Link to="/documentation">
                                <h6>Documentation</h6>
                            </Link>
                        </div>


                        <div>
                            <h6>Updates</h6>
                            <Link to="/blog">
                                <h6>Blog</h6>
                            </Link>
                            <Link to="/changelog">
                                <h6>Changelog</h6>
                            </Link>
                            <Link to="/community">
                                <h6>Community</h6>
                            </Link>
                        </div>

                        <div>
                            <h6>Compared to</h6>
                            <Link to="/googleAnalytics"><h6>Google Analytics</h6></Link>
                        </div>

                        <div>
                            <h6>Legal</h6>
                            <Link to="/terms"><h6>Terms & Conditions</h6></Link>
                            <Link to="/privacy"><h6>Privacy Policy</h6></Link>
                            <Link to="imprint"><h6>imprint</h6></Link>
                        </div>
                        </div>
                    </div>

                </footer>
            </div>



        </>
    )
}
