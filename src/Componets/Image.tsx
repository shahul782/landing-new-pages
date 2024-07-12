import React from 'react'
import image from '../assets/img-1.jpg';
import image2 from '../assets/img-2.jpg';
import image3 from '../assets/img-3.jpg'
import image4 from '../assets/img-4.jpg';
import Button from '@mui/material/Button';
import '../App.css'
const Image = () => {
  return (
   
    <div style={{padding:"10px"}}>

      <div  className='container' style={{display:"flex",padding:"10px",gap:"10px" }}>
        <div>
        <img src={image} style={{width:"100%",height:"auto"}}/>
        <div style={{display:"flex", gap:"10px"}}>
         <div>
          <h1>The bright  Feature of  web 3.0?</h1>
         </div>
         <div className='second-content'>
          <p>we dive into the next evoluation of the web that claims to put the power of the platforms back into hands of the peoplen but is really fulfilling its promise</p>
          <Button style={{backgroundColor:"#CD5C5C",color:"white"}}>Read More</Button>
         </div>
         </div>
         </div>


         <div style={{backgroundColor:"#002984",gap:"20px",padding:"10px",height:"auto",rowGap:"5px"}}>
          <h1 style={{color:"orange"}}>New</h1>
          <h2 style={{color:"white"}}>Hydrogen vs electric Cars</h2>
          <p>will hydrogen-fuled cars ever catch up to evs</p>
          <hr></hr>
          <h2 style={{color:"white"}}>The downsides of Al Artistry</h2>
          <p>what are the possible adversw effect of an-demand Al image generation?</p>
          <hr></hr>
          <h2 style={{color:"white"}}>Is vc Funding Drying up?</h2>
          <p>private funding by vc firms is down 50% YOY we take a look at what the means</p>

        </div>
        </div>



       

  {/* computer img  */}
<div className='container-2' style={{display:"flex",margin:"5px"}}>
        <div style={{display:"flex" ,gap:"10px"}}>
         <img style={{margin:"5px",height:"200px"}} src={image2}/>
         <div>
          <h1 style={{color:"#757575"}}>01</h1>
          <h2 style={{color:"black"}}>Reviving Retro pcs</h2>
          <p>what happens when old pcs are given modern upgrades</p>
         </div>
        </div>



        <div style={{display:"flex", gap:"10px"}}>
         <img  style={{margin:"5px",height:"200px"}}src={image3}/>
         <div style={{height:"auto"}}>
          <h1  style={{color:"#757575"}}>02</h1>
          <h2 style={{color:"black"}}>Top 10 Laptops bof 2022</h2>
          <p>Our best picks for various needs and budjets</p>
         </div>
        </div>

        <div  style={{display:"flex",  gap:"10px"}}>
         <img  style={{margin:"5px",height:"200px"}}src={image4}/>
         <div style={{height:"100px"}}>
          <h1  style={{color:"#757575"}}>03</h1>
          <h2 style={{color:"black"}}>The Growth Of Gaming</h2>
          <p>How the pandamics has sparked fresh Oppurtunities</p>
         </div>
        </div>
        </div>


        </div>

        
          


    
   
  )
}

export default Image