import React from 'react';
import style from "./first.module.css"

export const First = () => {
  return (
   <>
  <div className={style.imageRow}>
  <span className={style.firstImage}><img alt='firstImage' src='https://splitbee.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsplitbee-analytics-desktop.831c26e6.png&w=1200&q=90' /></span>
      {/* <img alt='firstImage' src='https://splitbee.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsplitbee-analytics-desktop.831c26e6.png&w=1200&q=90' /> */}
      <img alt="secondImage" src='https://splitbee.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsplitbee-analytics-mobile-user-view.429217c7.png&w=256&q=100' />
    </div>
   </>
  )
}
