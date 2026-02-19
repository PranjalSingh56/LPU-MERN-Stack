import { NavLink } from "react-router-dom";

export default function MobileTabs() {
  const tabs = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/trending", label: "Trending", icon: "🔥" },
    { to: "/gaming", label: "Gaming", icon: "🎮" },
    { to: "/history", label: "History", icon: "🕒" },
  ];

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0
        bg-[#0f0f0f] border-t border-gray-800
        flex justify-around items-center
        h-14
        sm:hidden
        z-50
      "
    >
      {tabs.map(tab => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-white" : "text-gray-400"
            }`
          }
        >
          <span className="text-lg">{tab.icon}</span>
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
}
