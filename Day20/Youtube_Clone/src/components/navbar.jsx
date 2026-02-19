import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar({ onMenuClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] flex items-center px-4 z-50">
      
      {/* LEFT: Hamburger + Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="text-white text-2xl p-2 rounded-full hover:bg-zinc-800"
        >
          ☰
        </button>

        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube"
            className="h-8"
          />
          <span className="text-white font-bold text-lg hidden sm:block">
            YouTube
          </span>
        </Link>
      </div>

      {/* CENTER: Search */}
      <div className="flex-1 flex justify-center px-4">
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white rounded-full px-4 py-1 w-full max-w-md"
    >
      <input
        className="bg-transparent outline-none w-full text-black text-sm"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit" className="p-1 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  </div>
    </nav>
  );
}
