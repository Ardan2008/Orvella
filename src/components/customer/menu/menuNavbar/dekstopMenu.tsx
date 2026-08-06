"use client";

import LanguageToggle from "./languageToggle";
import { useMenuSearch } from "@/context/menuSearchContext";

const SearchIcon = ({ className }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2.000000, 2.000000)" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9.76659044" cy="9.76659044" r="8.9885584" />
      <line x1="16.0183067" y1="16.4851259" x2="19.5423342" y2="20.0000001" />
    </g>
  </svg>
);

const CartIcon = ({ className }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2.000000, 2.500000)" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M0.7501,0.7499 L2.8301,1.1099 L3.7931,12.5829 C3.8701,13.5199 4.6531,14.2389 5.5931,14.2359094 L16.5021,14.2359094 C17.3991,14.2379 18.1601,13.5779 18.2871,12.6899 L19.2361,6.1319 C19.3421,5.3989 18.8331,4.7189 18.1011,4.6129 C18.0371,4.6039 3.1641,4.5989 3.1641,4.5989" />
      <line x1="12.1251" y1="8.2948" x2="14.8981" y2="8.2948" />
      <path d="M5.1544,17.7025 C5.4554,17.7025 5.6984,17.9465 5.6984,18.2465 C5.6984,18.5475 5.4554,18.7915 5.1544,18.7915 C4.8534,18.7915 4.6104,18.5475 4.6104,18.2465 C4.6104,17.9465 4.8534,17.7025 5.1544,17.7025 Z" fill="currentColor" />
      <path d="M16.4347,17.7025 C16.7357,17.7025 16.9797,17.9465 16.9797,18.2465 C16.9797,18.5475 16.7357,18.7915 16.4347,18.7915 C16.1337,18.7915 15.8907,18.5475 15.8907,18.2465 C15.8907,17.9465 16.1337,17.7025 16.4347,17.7025 Z" fill="currentColor" />
    </g>
  </svg>
);

const DekstopMenu = () => {
  const { query, setQuery } = useMenuSearch();

  return (
    <div className="hidden md:flex w-full items-center justify-between gap-6">

      {/* Search */}
      <div className="group flex flex-1 items-center gap-2.5 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm transition-all duration-300 ease-out focus-within:border-black">
        <SearchIcon className="h-4 w-4 text-black/40 shrink-0 transition-colors duration-300 group-focus-within:text-black" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search menu..."
          className="w-full bg-transparent text-sm text-black placeholder:text-black/40 focus:outline-none"
        />
      </div>

      {/* Language Toggle */}
      <LanguageToggle />

      {/* Cart */}
      <button
        type="button"
        aria-label="Cart"
        className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/85 transition-colors duration-200 cursor-pointer shrink-0"
      >
        <CartIcon className="h-4 w-4" />
        <span>Cart</span>
      </button>
    </div>
  );
};

export default DekstopMenu;