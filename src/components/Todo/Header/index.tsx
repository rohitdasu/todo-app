import React from "react";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-4 md:px-0">
      <p className="text-xl md:text-5xl uppercase text-white tracking-[0.5rem] font-bold font-josefin">
        todo
      </p>
      <ThemeToggler />
    </div>
  );
}

export default Header;
