import React from "react";

function LeftSidebar() {
  return (
    <aside className="w-60 bg-orange-400 p-4 fixed h-full left-0 mt-[70px]">
      <div className="shadow-2xl py-5">
        <p className="text-2xl mb-5 font-semibold text-center">Left Sidebar</p>
        <p className="text-center mb-10">FIXED CONTENT</p>
      </div>
    </aside>
  );
}

export default LeftSidebar;
