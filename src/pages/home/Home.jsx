import React from "react";
import Header from "../../components/header/Header";
import FAQ from "./FAQ/FAQ";
import Footer from "../../components/header/footer/Footer";
import OurExpertise from "./Our Expertise/OurExpertise";
import Quotes from "./Quotes/Quotes";
import Hero from "./hero/Hero";
import HowWorks from "./how it works/HowWorks";
import WhyTherapy from "./why therapy/WhyTherapy";
import Testimonials from "./testimonials/Testimonials";
import CtaBanner from "../aboutUs/cta banner/CtaBanner";
import AboutUsHero from "../aboutUs/aboutUsHero/AboutUsHero";
import CarinDetails from "../aboutUs/carinDetails/CarinDetails";
import CarinBanner from "../aboutUs/CarinBanner/CarinBanner.jsx";
import CarinTravel from "../aboutUs/CarinTravel/CarinTravel.jsx";
import Therapists from "../aboutUs/Therapists/Therapists.jsx";
import AboutTherapist from "../aboutUs/AboutTherapist/AboutTherapist.jsx";



const Home = () => {
  return (
    <div className="">
      <Header />
      {/* <Hero/>
        <HowWorks/>
        <OurExpertise />
        <Quotes/>
        <WhyTherapy />
        
        <Testimonials />
        <FAQ />
        <CtaBanner/> */}
      <AboutUsHero />
      <CarinDetails/>
      <CarinBanner/>
      <CarinTravel/>
      <Therapists/>
      <AboutTherapist/>
      <CtaBanner/>

      <Footer />
    </div>
  );
};

export default Home;
