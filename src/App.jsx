

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import Signup from './section/Signup';
import Login from './section/Login';
import Hero from './section/Hero';
import More from './section/More';
import Superquality from './section/Superquality';
import Services from './section/Services';
import CustomerReview from './section/CustomerReview';
import { Footer, Subscribe } from './section';
import { allproducts } from './constants';

const App = () => {
  return (
    <Router basename="/Nike">
      <MainContent />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  const showNav = !['/Signup', '/Login'].includes(location.pathname);

  return (
    <>
      {showNav && <Nav />}
      <main className="relative">
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={
            <>
              <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
              </section>
              <section className="padding">
                <More />
              </section>
              <section className="padding">
                <Superquality />
              </section>
              <section className="padding-x py-10">
                <Services />
              </section>
              <section className="bg-pale-blue padding">
                <CustomerReview />
              </section>
              <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
              </section>
              <section className="bg-black padding-x padding-t pb-8">
                <Footer />
              </section>
            </>
          } />
        </Routes>
      </main>
    </>
  );
};

export default App;
