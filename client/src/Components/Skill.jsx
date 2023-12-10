import React from "react";
import { ImCross } from "react-icons/im";
function Skill({ children, onClick, style }) {
  if (style) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="font-bold text-gray px-3 py-1 m-2 bg-lavender border-2 rounded-2xl visited:bg-blue "
      >
       <div className="flex justify-center items-center gap-2">{children} <span className="text-gray"><ImCross size={14}/></span></div> 
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-bold text-gray px-3 py-1 m-2 bg-lavender border-2 rounded-2xl visited:bg-blue "
    >
      {children}
    </button>
  );
}

export default Skill;
