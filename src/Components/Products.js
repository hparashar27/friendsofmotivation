import React from 'react'
import classes from './Products.module.css'

function Products() {
    
  return (
    <>
 <h3 className={classes.ourproducts}> Our Products </h3>
    <section className={classes.Products}>
<div><p className={classes.para}>Backless Yoga Chair <br/> for Holding, Alignment, Flexibility</p></div>
<div><video width="100%" height="100%" loop muted autoPlay="autoplay"
    className={classes.prod1} src ={require('./ImgVidfiles/chair.mp4')} type="video/mp4" /></div>
<div><video width="100%" height="100%" loop muted autoPlay="autoplay"
    className={classes.prod2} src ={require('./ImgVidfiles/mask.mp4')} type="video/mp4" /></div>
<div> <p className={classes.para2}> Mulberry Silk Eye Mask <br/> Super Smooth Sleep Mask and Blind Fold </p></div>
<div><p className={classes.para3}> Friends of Meditation Yoga Mat Bag <br/>Gym Carrier Bag with Pockets and Adjustable Strap </p></div>
<div><div><video width="100%" height="100%" loop muted autoPlay="autoplay"
    className={classes.prod3} src ={require('./ImgVidfiles/bottle.mp4')} type="video/mp4" /></div></div>
<div><div><video width="100%" height="100%" loop muted autoPlay="autoplay"
    className={classes.prod4} src ={require('./ImgVidfiles/belt.mp4')} type="video/mp4" /></div></div>
<div><p className={classes.para2}> Yoga Belt Best for Daily Stretching <br/> Yoga, Pilates, Physical Therapy, Fitness </p></div>
    </section>
    </>
  )
}

export default Products ; 