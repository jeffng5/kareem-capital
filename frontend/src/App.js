import React from 'react'
import './App.css';
import Forms from "./Forms"



function App() {


  return (
  <html>
  <h5 className='heading'>Kareem Capital Management Inc.</h5>
  <h4>_____________________________________________________________________________________________________________________________________________________________________________________________</h4>
  <h5 id='nav'>
<p>Home</p>
<p>About</p>
<p>Services</p>
<p>Opening Hours</p>
<p>Contact</p>
  </h5>


<div className='fixed-bg' style={{height:"600", backgroundColor:"black"}}></div>


  <h1 className='subheader'>Kareem Capital Management Inc.</h1>

    <h1 className='subheader'>Welcomes You</h1>
<h1 className='subtitle'>Doing Business the Right Way</h1>

<h1 className='bio'>Since opening in 2000, Kareem Capital Management Inc. has been proud to serve communities nationwide such</h1>
<h1 className ='bio'>as San Francisco community. We're committed to not only providing quality products and services, but going above</h1> 
<h1 className = 'bio'>and beyond to ensure our customers are completely satisfied. We welcome you to look through our site to see all we have to offer.</h1>
  <h2 className= 'get-in-touch'> ...</h2>
<h2 className= 'get-in-touch'>Get in Touch</h2>

  <div className= 'next-section'>
    <img src = "shaving.png" width="870" height = "700" alt=""></img>
    <h1 className='story-headline'>More About Kareem Capital Management Inc.
    <h1 className='our-story'> Our Story</h1>
   
   <h1 className="story">
    Since opening in 2000, we have become masters of our craft. Our commitment to quality products, exceptional services and incomparable customer care keep our community coming back again and again. We never stop improving, and are continuing to expand our offerings based on how we can best serve the San Francisco area.
    </h1>
    </h1>
  </div>

  
  <h1 className='services'>Services</h1>
<h2 className='services-message'><div className='services-message'><p>No matter what your needs are, you can count on Kareem Capital Management Inc. for the support you deserve. We see each</p> <p>customer as unique, which is why all of our services can be completely personalized to fit specific needs and preferences. </p> <p>Browse through our comprehensive range of services below to learn more about what we can do for you.</p></div></h2>

<div className='next-section1'>
  <img id= 'services1' src = 'delivery.png' width='870' height= '600' alt=''></img>
  <img id= 'services2' src = 'shopping.png' width='870' height ='600' alt=''></img>
  </div>

<div className='next-section2'>
  <div className= 'opening-hours'>
<h1 className= 'opening'>Opening Hours</h1>
<h1 className= 'opening'>Come Visit</h1>
<h1 className= 'opening'>Mon - Fri : 9am - 6pm</h1>
<h1 className= 'opening'>Sat : 10am - 2pm</h1>
<h1 className= 'opening'>Sun : Closed</h1>
</div>
<img id= 'opening' src = 'opening.png' alt='' height='600' width='860'></img>
</div>


<div className= 'contact'>
<div id= 'spacing1'>
<Forms />
</div>
<div id ='spacing'>
<img src = 'sweets.png' alt="" height="700" width='870' ></img>
</div>
</div>

<h5>© 2021 by Kareem Capital Management Inc.,</h5>
  
  </html>
  );


}

export default App;
