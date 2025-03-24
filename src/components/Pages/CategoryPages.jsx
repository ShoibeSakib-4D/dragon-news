import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewsCart from "../NewsCart";



const CategoryPages = () => {
  
   const {id} = useParams()
   
    const categoryId = id ? id : '01';


     const [category,setCategory] = useState([])
   
     
     useEffect(() =>{
        fetch(` https://openapi.programming-hero.com/api/news/category/${categoryId}`)
        .then(res =>res.json())
        .then(data=>setCategory(data.data))
     },[categoryId])
    return (
        <div>
         <h2 className="font-semibold">Dragon News Home</h2>
         <h2 className="pl-2">({category.length}) News Found</h2>
         {
            category.map(news =>
                <NewsCart key={news._id} singleNews={news}></NewsCart>
            )
         }
        </div>
    );
};

export default CategoryPages;