import React from "react";
import Banner from "../../components/Banner/Banner";
import Apps from "../Apps/Apps";
import Hero from "../../components/Hero/Hero";

const Home = ()  => {
    return (
        <div>
           <Banner></Banner>
           <Hero></Hero>

           <Apps></Apps>
        </div>
    );
};

export default Home ;