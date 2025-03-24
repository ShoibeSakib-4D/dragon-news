import { FaStar, FaStarHalfAlt, FaRegStar, FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCart = (props = {}) => {

     const {singleNews} = props || {}

     const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= Math.floor(rating)) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
          } 
          else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
          }
           else {
            stars.push(<FaRegStar key={i} className="text-gray-400" />);
          }
        }
        return stars;
      };
     
    return (
        <div className="card w-full  bg-base-100 shadow-lg border border-gray-200 p-4 my-2">
        {/* Author Section */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <img src={singleNews.author.img} alt="Author" className="w-8 h-8 rounded-full" />
          <div>
            <h3 className="font-medium">{singleNews.author.name}</h3>
            <p className="text-xs">{new Date(singleNews.author.published_date).toDateString()}</p>
          </div>
        </div>
  
        {/* News Thumbnail */}
        <figure className="mt-3">
          <img src={singleNews.thumbnail_url} alt="News Thumbnail" className="object-cover rounded-lg" />
        </figure>
  
        {/* Title */}
        <h2 className="text-lg font-bold mt-3">{singleNews.title}</h2>
  
        {/* Meta Information */}
        <p className="text-xs text-gray-500 mt-1">
          {singleNews.category ? `Category: ${singleNews.category}` : ""}
        </p>
  
        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{singleNews.details}</p>
  
        {/* Rating & Views */}
        {/* Rating & Views */}
        <div className="flex justify-between items-center mt-3 text-gray-600">
        <div className="flex items-center gap-1">
          {renderStars(singleNews.rating.number)}
          <span className="text-sm font-medium">({singleNews.rating.number})</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span className="text-sm">{singleNews.total_view}</span>
        </div>
      </div>
  
        {/* Read More Link */}
        <div className="mt-3">
          <Link to={`/news/${singleNews._id}`} className="text-primary font-medium hover:underline">Read More</Link>
        </div>
      </div>
    );
  };
    
    


export default NewsCart;