import React from "react";

function Skill({ children, onClick, style }) {
  if (style) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="font-bold text-gray px-3 py-1 m-2 bg-cyan border-2 rounded-2xl visited:bg-blue "
      >
        {children} <span className="text-gray">❌</span>
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-bold text-gray px-3 py-1 m-2 bg-cyan border-2 rounded-2xl visited:bg-blue "
    >
      {children}
    </button>
  );
}

export default Skill;
