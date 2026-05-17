export default function Footer() {
  return (
    <footer className="bg-[#1f5c49] px-5 py-10 text-center text-emerald-50 lg:px-16">
      <div className="mx-auto grid max-w-5xl justify-items-center gap-7">
        <div>
          <img className="mx-auto w-52 max-w-[78vw]" src="/assets/logo-xl.png" alt="KeenKeeper" />
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-emerald-50/85">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          <p className="mt-3 text-xs font-bold text-white">Social Links</p>
          <div className="mt-2 flex justify-center gap-2">
            <img className="size-7" src="/assets/instagram.png" alt="Instagram" />
            <img className="size-7" src="/assets/facebook.png" alt="Facebook" />
            <img className="size-7" src="/assets/twitter.png" alt="Twitter" />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4 text-[11px] text-emerald-50/75 sm:flex-row">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-5 sm:gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
