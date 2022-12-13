import React from "react";
import { useSelector } from "react-redux";
import Content from "../component/Content/Content";

const TopRate = () => {
  const {
    content: { data },
  } = useSelector((state) => state);
  console.log(data.sort((a, b) => a.rating - b.rating));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {data
        .filter((rate) => rate.rating >= 3)
        .sort((a, b) => a.rating - b.rating)
        .map((content, i) => (
          <Content key={i} content={content} />
        ))}
    </div>
  );
};

export default TopRate;
