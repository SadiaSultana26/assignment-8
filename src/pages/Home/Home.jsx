import React from "react";
import Banner from "../../components/Banner/Banner";
import Apps from "../Apps/Apps";
import Hero from "../../components/Hero/Hero";
import State from "../../components/State/State";

const Home = ()  => {
    return (
        <div>
           <Banner></Banner>
           <Hero></Hero>
           <State></State>

           <Apps></Apps>
        </div>
    );
};

export default Home ;