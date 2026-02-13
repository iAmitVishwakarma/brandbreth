const Navbar = () => {
  return (
    // Add a specific background color to the nav (e.g., bg-black)
    <nav className="w-full h-16 flex fixed z-500 justify-between items-end px-14 mix-blend-difference ">
      {/* Logo Section */}
      <h1 className="text-3xl group cursor-pointer flex flex-col overflow-hidden h-10 -tracking-widest relative">
        {/* Added mix-blend-difference to both spans for consistency */}
        <span className="p-1 font-medium text-white transition-transform duration-200 transform translate-y-0 group-hover:-translate-y-full mix-blend-difference">
          Brandbeet
        </span>
        <span className="p-1 text-white transition-transform duration-200 transform translate-y-0 group-hover:-translate-y-full mix-blend-difference">
          Brandbeet
        </span>
      </h1>

      {/* Email Section */}
      <p className="text-xl group cursor-pointer flex justify-start flex-col tracking-tighter overflow-hidden h-7 relative">
        {/* Adjusted translate values to use 'full' or specific height to match container height (h-7) */}
        <span className="text-white transition-transform duration-200 transform translate-y-0 group-hover:-translate-y-full mix-blend-difference">
          hello@BrandBreth.com
        </span>
        <span className="text-white transition-transform duration-200 transform translate-y-0 group-hover:-translate-y-full mix-blend-difference">
          hello@BrandBreth.com
        </span>
      </p>
    </nav>
  );
};

export default Navbar;
