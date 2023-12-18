import React from "react";
import home1 from "../img/home-img.jpg"
import home2 from '../img/home-img2.jpg'
import special from '../img/special.jpg'
import ladypic1 from '../img/lady-1.png'
import ladypic2 from '../img/lady-2.png'
import ladypic3 from '../img/lady-3.png'

export default function Home(){
    return(
 <>
 <section className="container-fluid home">
   <div className="container">
     <div className="row">
        <div className="col-lg-6 col-sm-6 home-head pt-5">
            <h1>Casting Nature’s Spell</h1>
            <h3>#SpellboundSkincare</h3>
            <h5>Endowed by the finest of Ayurveda’s best-kept secrets, we bring an otherworldly experience
                 with our all-natural products. The scintillating soaps we curate are amalgamations of divine Ayurvedic ingredients 
                 cold-pressed with modern technology. As you immerse your physical and metaphysical essence in our mystic 
                 curations, dive beyond the ephemeral and indulge in tranquillity. Be under nature’s most bewitching spell that unwinds,
                 rejuvenates and revives.</h5>
        </div>
     </div>
     </div>
 </section>
 <div className="homepage1">
     <div className="row container align-items-center">
        <div className="col-lg-6 col-sm-6">
            <img className="homepage1-img" src={home1} alt="" />
        </div>
        <div className="col-lg-6 col-sm-6 homepage1-info">
            <h1>Legacy is the new Sensation</h1>
            <h5>Beauty is an abstract concept with distinct meanings in different
                 cultures around the world, but the real beauty comes from within. 
                 Since time immemorial, Ayurveda has been guarding the doors to immense knowledge 
                 in medicine and holistic health. We envision passing down this legacy of Ayurveda to
                 future generations.</h5>
        </div>
     </div>
     </div>
   <section className="homepage2 container pb-5" id="ingredients">
      <div className="row homepage2-head ">
      <h1 className="text-center">Phenomenally pure and powerful ingredients</h1>
        <div className="col-lg-6 col-sm-6 homepage2-info ">
            <h5>Our handpicked ingredients are selected after an elaborate 4-step evaluation process
                consisting of safety, efficacy,sourcing and environmental impact check. Every ingredient
                is nourishing enough to gently scrape off the skin impurities while leaving your skin smooth
                and supple. Given that our daily exposure to toxins and harsh chemical cleansers strips off the
               skin of its natural radiance, our secret ingredient list can be your magic wand to keep your skin glowing and naturally healthy. </h5>
            
            <h5>Every product is made with cold-pressed essential oils, pure oils, distillations and floral 
                    extracts, Suitable for all skin types, the soaps do so much more than offer a fragrant bathing 
                    experience. They are enriched with rejuvenating properties and ingredients like red sandalwood 
                    that are known for purifying, clarifying, skin-brightening and healing properties. Turmeric rose, 
                    milk and other natural components hold illuminating properties for deeply-tanned, hyper-pigmented skin.
                     Turmeric is a potent anti-inflammatory and antibacterial agent, and every organic soap is infused with essential oils for a deep moisturizing effect on the skin.</h5>
        </div>
        <div className="col-lg-6 col-sm-6">
            <img src={home2} className="homepage2-img" alt="" />
        </div>
      </div>
   </section>
  <section className="OurStory" id="OurStory">
    <div className="container">
    <div className="row">
      <div className="col-lg-12 col-sm-12 text-center OurStory-info">
        <h1>Our story</h1>
        <h5>After using thousands of artificial products packed with toxins and chemicals
          , the atrocious impact on the skin propelled an innovation known as Thavare. 
          Imagine having acne and blemish-prone skin and feeling overwhelmed by the sight 
          of a pimple appearing unannounced before a big event that you have been waiting
           for months. I went through that and my acne problem pushed me straight into the 
           trap of chemical cleansers, toners and whatnot that promised to balance my blemish-prone
            skin. But, the effect of using so many products on my skin was leading to even more breakout
            s until I decided that I would stick to the natural side of skincare.</h5>

        <h5>While experimenting with a few Ayurvedic, natural compositions, I came across
           some life-changing compounds that left my skin glass-clear for good and after a few
           months, those compounds flapped their wings for the first time in the market under
           he name of Thavare. Thavare isn’t just a brand, it’s my journey from being an
           underconfident woman scrambling with acne to a women entrepreneur flaunting her healthy, radiant skin. </h5>
      </div>
    </div>
    </div>
  </section>
  <section className="Special pt-3 pb-3" id="WhyUs">
    <div className="container">
      <h1 className="text-center Special-head">What makes us special</h1>
    <div className="row align-items-center">
    <div className="col-lg-4 col-sm-12">
      <img src={special} className="special-img" alt="" />
    </div>
      <div className="col-lg-8 col-sm-12 special-info">
        <h4><i className="fa-solid fa-hand-point-right icons-coloring"></i> Cold Pressed Products</h4>
        <h4><i className="fa-solid fa-hand-point-right icons-coloring"></i> Cruelty-free, consciously-crafted products</h4>
        <h4><i className="fa-solid fa-hand-point-right icons-coloring"></i> Made with GMP</h4>
        <h4><i className="fa-solid fa-hand-point-right icons-coloring"></i> Authentically Ayurvedic</h4>
        <h4><i className="fa-solid fa-hand-point-right icons-coloring"></i> 100% Natural</h4>
        <h4><i className="fa-solid fa-hand-point-right icons-coloring"></i> Enriched with purity-guaranteed ingredients that are ethically sourced</h4>
      </div>
      </div>
      <h2 className="Special-bottom text-center">Need more reasons to be a part of the <a href="#">#ThavareSquad?</a>  Drop us a line now or shop from our exuberant assortment of products!</h2>
    </div>
    
  </section>
   
   {/* About section */}

 <section className="container-fluid aboutus pt-5" id="aboutus">
  <div className="row aboutus-head text-center">
    <h1>AboutUs</h1>
    <div className="col-lg-4 col-sm-12 aboutus-info">
    <p>Welcome to Thavare Private Limited, the epitome of luxury Ayurvedic beauty products.
       At the helm of our global company stands Dr. Meena Kodandaram, a visionary leader who serves
       as our esteemed founder and CEO.</p>
    <p>Before embarking on this remarkable journey, Dr. Meena Kodandaram dedicated her 
      expertise as a geriatrician in various clinics and hospitals. With a distinguished 
      academic background, she achieved honors during her Bachelor of Medicine, Bachelor 
      of Surgery (MBBS) studies at Ambedkar Medical College. Driven by her passion for preventive
       healthcare, she is an executive advisor for the Society for Prevention of Cancer (SPOC) Foundation.</p>
    <p>Dr. Meena Kodandaram's unwavering commitment to blending modern scientific knowledge with the ancient
       principles of holistic health led to our exceptional Thavare product line.With a profound belief in
        the power of nature, she crafted these products to restore, revive, </p>
   
    </div>
    <div className="col-lg-4 col-sm-12">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={ladypic1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={ladypic2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={ladypic3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className="col-lg-4 col-sm-12 aboutus-info">
      <p> and renew your skin from the outside in.By harnessing the essence of Ayurveda, Thavare offers a unique and indulgent experience
         that brings harmony to both body and mind.</p>
      <p>Beyond our commitment to luxury and holistic wellness,
       Thavare extends its influence globally. Dr. Meena Kodandaram's 
       compassionate nature inspired her to export wellness kits containing 
       everyday essentials for patients undergoing treatments at Nairobi West 
       Hospital in Kenya. This initiative showcases our dedication to positively 
       impacting lives beyond the boundaries of our business.</p>
    <p>At Thavare Private Limited, we are proud to be guided by Dr. Meena Kodandaram's visionary 
      leadership. With our exquisite Ayurvedic beauty products, we invite you to embark on a transformative
       journey of self-care and rejuvenation. Experience the embodiment of ancient wisdom and modern science
        with Thavare, where beauty meets holistic wellness.</p></div>
  </div>
 </section>

 </>
    )
    }