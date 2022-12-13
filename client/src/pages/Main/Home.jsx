import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleData, toggleUpload } from "../../redux/action/toggle";
import fetchContent from "../../redux/thunk/content/fetchContent";
import Content from "../component/Content/Content";

export default function Home() {
  const dispatch = useDispatch();
  const {
    content: { data },
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  const activeClass = "text-white  bg-red-500 border-white";
  const {
    filter
  } = useSelector((state) => state);

  return (
    <>
      <div className="my-5 flex justify-end gap-5">
        <button
          onClick={() => dispatch(toggleData())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            filter.toggle ? activeClass : ""
          }`}
        >
          Recent
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            filter.data.includes("lUpload") ? activeClass : ""
          }`}
          onClick={() => dispatch(toggleUpload("lUpload"))}
        >
          Last Upload
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            filter.data.includes("fUpload") ? activeClass : ""
          }`}
          onClick={() => dispatch(toggleUpload("fUpload"))}
        >
          First Upload
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {data.map((content, i) => (
          <Content key={i} content={content} />
        ))}
      </div>
    </>
  );
}
