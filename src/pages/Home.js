import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Tours from "../components/Tours";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7865735760405609"
        crossorigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7865735760405609"
        data-ad-slot="3615514016"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <About />
      <Services />

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7865735760405609"
        data-ad-slot="3615514016"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <Tours />
      <Footer />
    </>
  );
};

export default Home;
