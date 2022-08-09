import React from 'react'
import classes from './BelowContent.module.css'

function BelowContent() {
  return (
   <>
  <div className={classes.belowcontent}>
   <img src={require('./fomchair.png')} className={classes.logo2} />
   <img src={require('./yogastrap.png')} className={classes.logo2} />
   <img src={require('./sofafom.jpg')} className={classes.logo2} />
   <img src={require('./bottlefom.png')} className={classes.logo2} />
   </div>
   </>
  )
}

export default BelowContent;