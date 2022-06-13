import React, { useEffect } from "react";
import datas from "../../Datas/datas";

export default function ResultsCategoryHouses({click}) {

  const category = datas.category.map((data, i)=>{
    return <span key={i} onClick={click}>{data}</span>;
  })

  return (
    <>
      <div className="houses-search-bar">
        <input type="search" placeholder="Category" />
        <div className="results-houses">
          {category}
          
        </div>
      </div>
    </>
  );
}
