import { useState } from "react";
import Nav from "./Components/Nav"
import {
  CustomerReview,
  
  Footer,
  
  Hero,
  Inside,
  Popularproduct,
  Services,
  Subscribe,
  Superquality,
} from "./section/index";




// new for you  cms , hamburger menu hide idea componenets  nav.js , tailwind ke under logic kese likhte jiske vajese design ko use kr sakte hai example ShoeCard.jsx me jaa aur bhi logic hai samch na  shoe card.jsx

//  👍 flex  xl:flex-row flex-col    
  // actually hay  xl = extra large me  flex row rahega and  jab moible divces  col  ho jaega
//    <section id='home' className='w-full  border-2 border-red-500 flex  xl:flex-row flex-col'>
      // 

      // </section>


// import { products } from "../constants";   yeh bhut kaam ki chich hai suppose agure mujhe  cms ke aunder se  particlaur data ko lena ho  we call its name of that data {products}






const App = () => {

  const[first,setfirst]=useState(false)

const handlechange=()=>{
  setfirst(pre=>!pre)
}

    return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
{
  first?<Inside closePopup={handlechange}/>:<Popularproduct pass={handlechange} />
}
    
      </section>
      <section className='padding'>
        <Superquality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      {/* <section className='padding'>
        <Specialoffer />
      </section> */}
      <section className='bg-pale-blue padding'>
        <CustomerReview />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
       <Footer></Footer>
      </section>
    </main>
  );
};

export default App;
