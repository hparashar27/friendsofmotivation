import React from 'react'
import classes from './BelowContent.module.css'

function BelowContent() {
  return (
   <>

   <div className={classes.about}>
   <p className={classes.about1}>ABOUT US</p>
   <p className={classes.about2}>We are passionate about meditation, yoga, and relaxation. Our work involves innovation-led manufacturing of an eccentric range of products that facilitate ease in practicing yoga and meditation techniques for beginners as well as experts.</p>
   </div>

   <h3 className={classes.ourprod}> Our Products </h3>
  <div className={classes.belowcontent}>
   <img src={require('./ImgVidfiles/fomchair.png')} className={classes.logo2} />
   <img src={require('./ImgVidfiles/yogastrap.png')} className={classes.logo2} />
   <img src={require('./ImgVidfiles/sofafom.jpg')} className={classes.logo2} />
   <img src={require('./ImgVidfiles/bottlefom.png')} className={classes.logo2} />
   <div>
    <ul >
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
   </div>
   </div>
   <
   </>
  )
}

export default BelowContent;