// import { useState } from "react";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "WORK", href: "#work" },
//     { name: "STACK", href: "#stack" },
//     { name: "LAB", href: "#lab" },
//     { name: "CONTACT", href: "#contact" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-[#0B0E11] text-[#9CA3AF] text-md tracking-widest border-b border-[#1E2329] px-6 py-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Brand / Logo */}
//         <div className="text-white font-bold tracking-widest text-sm flex items-center">
//           B<span className="text-[#00C076] mx-0.5">/</span>MICHAEL
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="hover:text-white transition-colors text-sm duration-200"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Right Status Badge & Hamburger Toggle */}
//         <div className="flex items-center space-x-4">
//           <span className="inline-flex items-center border border-[#00C076] text-[#00C076] text-[10px] font-semibold px-3 py-1 md:px-4 md:py-1.5 rounded-full tracking-widest hover:bg-[#00C076] hover:text-black transition-colors cursor-pointer">
//             AVAILABLE
//           </span>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//             className="md:hidden text-[#9CA3AF] hover:text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden pt-4 pb-2 space-y-3 flex flex-col border-t border-[#1E2329] mt-4">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="hover:text-white transition-colors text-sm py-1 duration-200"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;

import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "STACK", href: "#stack" },
    { name: "LAB", href: "#lab" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Check if we are on the page containing the target sections
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // If element exists on current page, smooth scroll to it
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Update browser URL hash without jump
      window.history.pushState(null, "", href);
    } else {
      // If on another page, navigate to home page with the target hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B0E11] text-[#9CA3AF] text-md tracking-widest border-b border-[#1E2329] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => handleScroll(e, "#top")}
          className="text-white font-bold tracking-widest text-sm flex items-center cursor-pointer"
        >
          B<span className="text-[#00C076] mx-0.5">/</span>MICHAEL
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-white transition-colors text-sm duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Status Badge & Hamburger Toggle */}
        <div className="flex items-center space-x-4">
          <span className="inline-flex items-center border border-[#00C076] text-[#00C076] text-[10px] font-semibold px-3 py-1 md:px-4 md:py-1.5 rounded-full tracking-widest hover:bg-[#00C076] hover:text-black transition-colors cursor-pointer">
            AVAILABLE
          </span>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-[#9CA3AF] hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-3 flex flex-col border-t border-[#1E2329] mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-white transition-colors text-sm py-1 duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
