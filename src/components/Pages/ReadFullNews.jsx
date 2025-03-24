import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Header from "../Header";
import RightNavbar from "../Layout-Components/RightNavbar";


const ReadFullNews = () => {
    const {id} = useParams();

      const [data,useData] = useState({})

      useEffect(()=>{
         fetch(`https://openapi.programming-hero.com/api/news/${id}`)
         .then(res => res.json())
         .then(data => useData (data.data[0]))
      },[id])

    return (
        <div>
              <header>
     <Header></Header>
   </header>
     <div className="w-11/12 mx-auto gap-5 grid grid-cols-12 font-primary">
        <div className="col-span-9">
           <h1 className="text-2xl font-bold">Dragon News</h1>
           <div className="card bg-base-100  shadow-sm mt-3">
  <figure className="px-5 pt-8">
    <img
      src={data?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{data?.title}</h2>
    <p>{data?.details}</p>
    <div className="card-actions">
      <Link to={`/category/${data?.category_id}`} className="btn btn-primary">All News In This Category</Link>
    </div>
  </div>
</div>
        </div>
        <div className="col-span-3">
            <RightNavbar></RightNavbar>
        </div>
     </div>
 

        </div>
    );
};

export default ReadFullNews;