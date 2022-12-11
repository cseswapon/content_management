import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchContent from "../../redux/thunk/content/fetchContent";
import Content from "../component/Content/Content";

export default function Home() {
  const dispatch = useDispatch();
  const {data} = useSelector((state => state));
  console.log(data);
  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch]);
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {data.map((content, i) => (
          <Content key={i} content={content} />
        ))}
      </div>
    </>
  );
}
