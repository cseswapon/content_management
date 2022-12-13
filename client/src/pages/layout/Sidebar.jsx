import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div className="col-span-2 bg-red-200 h-[calc(100vh-25px)] p-4 rounded-lg">
        <ul className="flex gap-3  flex-col h-full">
          <li className="text-sm">Admin Dashboard</li>
          <li className="mt-12 text-sm">
            <Link to="list-content">Product List</Link>
          </li>
          <li className="text-sm">
            <Link to="/dashboard"> Add Product </Link>
          </li>
          <li className="mt-auto text-sm">
            <Link to="/"> Back to Home </Link>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;