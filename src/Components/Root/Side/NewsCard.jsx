import React from 'react';
import { FaEye, FaShareAlt } from 'react-icons/fa';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    published_date,
    id
  } = news;

  const truncateText = (text, limit = 250) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  return (
    <div className="card bg-base-100 shadow-md mb-6 border">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img src={author?.img} alt={author?.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">{new Date(author?.published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex gap-3 text-lg text-gray-500">
          <MdOutlineBookmarkBorder />
          <FaShareAlt />
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold text-lg mb-3">{title}</h2>
        <img src={image_url} alt={title} className="w-full rounded mb-3" />
        
        <Link to={`/dragon/${id}`} className="text-gray-600">
          {truncateText(details)} <span className="text-orange-500 font-semibold">Read More</span>
        </Link>
      </div>

      <div className="flex items-center justify-between px-4 pb-4 text-gray-600 border-t pt-3">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-black">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
