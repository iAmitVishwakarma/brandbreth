const Navbar = () => {
  return (
    <nav className="w-full h-16 flex fixed z-[500] justify-between items-center px-4 sm:px-8 md:px-14 mix-blend-difference">
      {/* Logo Section */}
      <h1 className="text-2xl sm:text-3xl group cursor-pointer flex flex-col overflow-hidden h-9 sm:h-10 -tracking-widest relative">
        <span className="p-1 font-medium text-white transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full mix-blend-difference">
          BrandBreth
        </span>
        <span className="p-1 text-white transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full mix-blend-difference">
          BrandBreth
        </span>
      </h1>

      {/* Email Section */}
      <p className="text-sm sm:text-xl group cursor-pointer flex justify-start flex-col tracking-tighter overflow-hidden h-6 sm:h-7 relative">
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
