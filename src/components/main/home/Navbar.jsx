import React, { useState } from "react";
import menuData from "/src/constants/context/hn.json";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menu = menuData.navbar || [];

  return (
    <div className="w-full shadow bg-white py-2 z-50 relative">
      <nav className="py-3 px-4 flex justify-between items-center max-w-[85%] mx-auto">
        <h1 className="text-[#d40f1b] text-3xl font-semibold">आपकी न्यूज़</h1>
        <button onClick={toggleMobileMenu} className="block large:hidden text-2xl">
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden large:flex gap-6">
          {menu.map((item, index) => (
            <li key={index} className="relative">
              {item.href ? (
                <a href={item.href} className="hover:text-red-500 hover:underline">
                  {item.label}
                </a>
              ) : (
                <span
                  onClick={() => toggleSubmenu(index)}
                  className="cursor-pointer hover:text-red-400 hover:underline"
                >
                  {item.label}
                </span>
              )}
              {item.list && openIndex === index && (
                <ul className="absolute top-full left-0 mt-1 bg-black text-white rounded shadow w-48 z-10">
                  {item.list.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {mobileMenuOpen && (
        <div className="large:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {menu.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <a href={item.href} className="hover:text-red-500 hover:underline block">
                    {item.label}
                  </a>
                ) : (
                  <>
                    <span
                      onClick={() => toggleSubmenu(index)}
                      className="cursor-pointer hover:text-red-500 hover:underline block"
                    >
                      {item.label}
                    </span>
                    {item.list && openIndex === index && (
                      <ul className="mt-1 bg-black text-white rounded">
                        {item.list.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.href}
                              className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
