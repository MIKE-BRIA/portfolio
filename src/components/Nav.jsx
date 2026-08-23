const Nav = () => {
  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "STACK", href: "#stack" },
    { name: "LAB", href: "#lab" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B0E11] text-[#9CA3AF] text-md tracking-widest border-b border-[#1E2329] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="text-white font-bold tracking-widest text-sm flex items-center">
          B<span className="text-[#00C076] mx-0.5">/</span>MICHAEL
        </div>

        {/* Center Links */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors text-sm duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Status Badge */}
        <div>
          <span className="inline-flex items-center border border-[#00C076] text-[#00C076] text-[10px] font-semibold px-4 py-1.5 rounded-full tracking-widest hover:bg-blue-400 hover:text-white transition-colors cursor-pointer">
            AVAILABLE
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
