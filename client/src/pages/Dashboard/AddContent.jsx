import React from "react";
import { useState } from "react";

export default function AddContent() {
  const [value, setValue] = useState({
    title: "",
    content: "",
    contentImage: "",
    author: "",
    category: [],
    releaseDate: new Date().toDateString(),
    raging: 0,
  });
  const changeValue = (name, values) => {
    const newData = { ...value }
    newData[name] = values
    setValue(newData)
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  }
  return (
    <div className="ml-2">
      <form onSubmit={handelSubmit}>
        <div className="flex items-center">
          <label htmlFor="title" className="mr-3">Title</label>
          <br />
          <input
            onChange={(e)=>changeValue(e.target.name, e.target.value)}
            type="text"
            name="title"
            id="title"
            className="border p-1 my-2 rounded"
          />
          <br />
          <label htmlFor="content" className="mx-3">Content</label>
          <br />
          <input
            type="text"
            name="content"
            id="content"
            className="border p-1 my-2 rounded"
          />
          <br />
          <label htmlFor="contentImage" className="mx-3">ContentUrl</label>
          <br />
          <input
            type="text"
            name="contentImage"
            id="contentImage"
            className="border p-1 my-2 rounded"
          />
          <br />
        <label htmlFor="author" className="mx-3">Author</label>
        <br />
        <input
          type="text"
          name="author"
          id="author"
          className="border p-1 my-2 rounded"
        />
        <br />
              </div>
              <div className="flex items-center">
        <label htmlFor="category" className="mr-3">Category</label>
        <br />
        <input
          type="text"
          name="category"
          id="category"
          className="border p-1 my-2 rounded"
        />
        <br />
        <label htmlFor="raging" className="mx-3">Rating</label>
        <br />
        <input
          type="number"
          name="raging"
          id="raging"
          className="border p-1 my-2 rounded"
        />
        <br />
        <button className="bg-red-500 text-white border-l rounded-md px-3 py-2 ml-10">
          Submit
                  </button>
              </div>
      </form>
    </div>
  );
}
