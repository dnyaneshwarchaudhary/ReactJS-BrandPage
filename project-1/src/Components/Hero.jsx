const HeroSection = () => {

    return(

    <main className="Hero Container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE
              TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE 
              THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="shopping">
            <div className="hero-button">

<button>
    ShopNow
</button>


<button className="secondary-btn">
    Category
</button>


</div>

<p> Also Available On </p>

</div>

<div className="brand-icons">
<img src="/images/amazon.png" alt="amazon-logo"/>
<img src="/images/flipkart.png" alt="flipkart-logo"/>

</div>
        

        
        </div>
     
      

    
      
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="shoe-image" width={500}/>
        </div>  


    </main>
    );
}

export default HeroSection;