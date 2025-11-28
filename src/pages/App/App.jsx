import React, { use } from "react";
import { IoMdStar } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router";

const App = ({singleApp})  => {

   const {image,description,companyName,ratingAvg,downloads}=singleApp;


    return (
        <Link to='/About'>
       <div className="card bg-base-100 w-96 shadow-sm p-6">
  <figure>
    <img
    className="h-[200px]"
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {companyName}
      
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline"><FiDownload />{downloads}</div>
      <div className="badge badge-outline"><IoMdStar />{ratingAvg}</div>
    </div>
  </div>
</div>
</Link>
    );
};

export default App ;