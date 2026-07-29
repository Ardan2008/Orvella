import Link from "next/link";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex space-x-8 items-center">
      <Link
        href="/login"
        className="
          group relative inline-flex items-center gap-2 pl-5 pr-4 py-2 rounded-full
          text-sm font-medium text-white

          bg-black/80 hover:bg-black/90
          backdrop-blur-md backdrop-saturate-150
          border border-white/20 hover:border-white/40

          transition-all duration-200 active:scale-95
        "
      >
          <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-t-full" />

          <span>Login</span>

          <svg id="Arrow - Right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.75 11.7257L4.75 11.7257" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M13.6997 5.70124C13.6997 5.70124 19.7497 8.96224 19.7497 11.7242C19.7497 14.4882 13.6997 17.7502 13.6997 17.7502" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
      </Link>
    </div>
  );
};

export default DesktopMenu;