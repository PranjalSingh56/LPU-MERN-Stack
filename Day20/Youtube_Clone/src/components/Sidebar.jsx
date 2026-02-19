import React from "react";
import { Routes, Route,Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 font-bold text-lg border-b border-zinc-800">
          Menu
        </div>

        <ul className="p-2 space-y-2">
          <li>
            <Link to="/" className="block p-2 hover:bg-zinc-800 rounded">
                Home
            </Link>
        </li>
            <li>
                <Link to="/trending" className="block p-2 hover:bg-zinc-800 rounded">
                Trending
                </Link>
            </li>
          <li>
            <Link to="/gaming" className="block p-2 hover:bg-zinc-800 rounded">
                Gaming
            </Link>
        </li>
          <li className="p-2 hover:bg-zinc-800 rounded"> Subscriptions</li>
          <li className="p-2 hover:bg-zinc-800 rounded"> Library</li>
          <li>
            <Link to="/history" className="block p-2 hover:bg-zinc-800 rounded">
                History
            </Link>
        </li>

        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
