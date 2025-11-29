import React, { Suspense } from "react";
import App from "../App/App";
import { useLoaderData } from "react-router";

const HeroApp = () => {
    
    const data = useLoaderData(); 





    
    return (
        <div>
            <div>
          <h1 className="text-3xl text-center p-2 text-black font-bold"> Our All Applications</h1>
          <p className="text-center p-4">Explore All Apps on the Market developed by us. We code for Millions</p>
         </div>
         <div className="flex gap-2 p-4">

       <h1 className="font-bold">(20)Apps Found</h1>
        <input type="text" placeholder="Search" className="input input-bordered ml-auto w-24 md:w-auto" />   
         </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
       {
                    data?.map((singleApp) => (
                        <App key={singleApp.id} singleApp={singleApp} />
                    ))
                }
          </div> 
        </div>
     
  

        
    );
};

export default HeroApp ;





    

