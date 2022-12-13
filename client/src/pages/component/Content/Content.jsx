import React from "react";
import { BiListPlus } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const Content = ({ content }) => {
  const { pathname } = useLocation();
  // console.log(content);
  return (
    <div className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900">
      <div className="h-50 w-52 mx-auto">
        <img src={content?.contentImage} alt={content?.title} />
        <small className="text-center block text-red-700 my-2">
          Release Date: {content?.releaseDate}
        </small>
      </div>
      <h1 className="font-bold text-center">{content?.title}</h1>
      <p className="text-center font-semibold mb-3 bg-red-200 p-2 rounded-lg my-2">
        Rating: {content?.rating}
      </p>
      {pathname === "/" ? (
        <small className="block text-center">
          {content?.content?.length > 100
            ? content?.content?.slice(0, 100) + "..."
            : content?.content}
        </small>
      ) : (
        <small className="block text-center">{content?.content}</small>
      )}
      <div className="flex-1">
       {/*  <ul className="flex my-3">
          {content?.category?.map((feature, i) => {
            return (
              <li
                className="text-sm mt-0 mr-2 bg-red-500 text-white p-1 rounded-lg"
                key={i}
              >
                {feature}
              </li>
            );
          })}
        </ul> */}
        <p className="text-sm my-3 text-orange-700">
          Author: {content?.author}
        </p>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname === "/" && (
          <Link to={`/content/${content?._id}`}>
            <button className="bg-red-500 rounded-full w-52 py-1 px-2 flex-1 text-white text-bold">
              Details
            </button>
          </Link>
        )}
        {pathname === "/" && (
          <button
            title="Add to wishlist"
            className="bg-red-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Content;
