import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import MobileTabs from "./MobileTab";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      {/* NAVBAR */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      <div className="flex">
        {/* SIDEBAR */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 pt-14 p-6 ">
          <Outlet />
        </main>
      </div>
      <MobileTabs/>
    </div>
  );
}
