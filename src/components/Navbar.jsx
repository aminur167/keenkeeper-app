import { NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";

const links = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/timeline", label: "Timeline", icon: "timeline" },
  { to: "/stats", label: "Stats", icon: "stats" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 mx-auto flex h-12 w-full max-w-[1200px] items-center justify-between border-b border-slate-200 bg-white px-6 shadow-[0_1px_0_rgba(15,23,42,0.02)] lg:px-14">
      <NavLink to="/" className="flex items-center gap-2 text-[13px] font-black text-slate-900">
        <span>KeenKeeper</span>
      </NavLink>
      

      <nav className="flex items-center justify-end gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              [
                "inline-flex h-7 items-center gap-1.5 rounded-[3px] px-3 text-[11px] font-bold transition",
                isActive ? "bg-[#1f5c49] text-white" : "bg-white text-slate-500 hover:bg-[#1f5c49] hover:text-white"
              ].join(" ")
            }
          >
            <Icon name={link.icon} className="size-3" />
            <span className="hidden sm:inline">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
