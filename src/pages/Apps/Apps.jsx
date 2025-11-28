import React, { Suspense, useEffect, useState } from "react";
import App from "../../App";

const Apps = ()  => {
    const [allApps,setAllApps ] = useState([]);
    const appPromise = fetch('./Data.json').then(res=>res.json())
    return ( 
        <div>
          <h1 className="text-3xl text-center p-2 text-black font-bold"> Trending Apps</h1>
          <p className="text-center p-4">Explore All Trending Apps on the Market developed by us</p>
          <Suspense fallback={<span>loading.....</span>}>
             <App appPromise={appPromise}></App>
          </Suspense>
        </div>
    );
};

export default Apps ;