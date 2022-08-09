import React from 'react';
import classes from './Content.module.css'
import BelowContent from './BelowContent';
function Content() {
  return (
<>
<div className={classes.gridcontainer}>
<div>
    <h1 className={classes.content1}>Meditation Accessories</h1>
    <p className={classes.content2}>Meditation Accessories <br/> Connect  you with divine ...</p>
    <p>
The importance of yoga in modern life is abundant; one just ought to see. Yoga improves our focus span, sharpens our memory, enhances creativity. To maintain a positive mindset and physical health, yoga is a must. That is what conventionally people did in older times.</p>
</div>
<div>
<img src={require('./fomgirlnew.jpg')} className={classes.contentpic} />
</div>
</div>



</>
  )
}

export default Content ;