import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[58vh] w-[min(920px,calc(100%_-_36px))] place-items-center py-16 text-center">
      <div>
        <h1 className="text-8xl font-black text-[#1f5c49]">404</h1>
        <p className="mt-2 text-sm font-bold text-slate-500">This route does not exist in KeenKeeper.</p>
        <NavLink className="btn mt-5 rounded border-0 bg-[#1f5c49] text-white hover:bg-[#184738]" to="/">
          Back to Home
        </NavLink>
      </div>
    </section>
  );
}
