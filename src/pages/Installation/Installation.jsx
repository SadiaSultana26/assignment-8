import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../Utility/addToDB";
import AppCard from "../../components/AppCard/AppCard";


const Installation = () => {

    const [appList,setAppList]=useState([])

    const data =useLoaderData();
    console.log(data)


    useEffect(()=>{
        const storeAppData=getStoredApp();
       
        const ConvertedStoredApps=storeAppData.map(id=>parseInt(id))
        console.log(ConvertedStoredApps)
        const myInstalledApp=data.filter(app=>ConvertedStoredApps.includes(app.id));
        
       setAppList(myInstalledApp)
    },[] )
    return (
        <div>
           <div>
          <h1 className="text-3xl text-center p-2 text-black font-bold"> Your Installed Apps</h1>
          <p className="text-center p-4">Explore All Trending Apps on the Market developed by us</p>
         </div>

         <div>
            <h1 className="font-bold">{appList.length} Apps Found</h1>
           {
         appList.map(app => (
    <AppCard key={app.id} singleApp={app} />
))
}
        </div>
        </div>
    );
};

export default Installation ;