import React, { useEffect, useState } from "react";

const Apps = ()  => {
    const [allApps,setAllApps ] = useState([]);
    useEffect (() => {
        fetch("Data.json")
        .then(res =>res.json())
        .then(data => {
            setAllApps(data)
        })
    }, [])
    return ( 
        <div>
          <h1 className="text-3xl text-center p-2 text-black font-bold"> Trending Apps</h1>
          <p className="text-center p-4">Explore All Trending Apps on the Market developed by us</p>
        </div>
    );
};

export default Apps ;