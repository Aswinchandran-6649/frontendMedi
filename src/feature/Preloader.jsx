import React from 'react'

function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F3EFEC]">
      <img
        src="https://cdn.dribbble.com/users/277378/screenshots/3723320/pillwalk_1.gif"
        alt="Loading..."
        className="w-100 h-100 object-contain"
      />
    </div>
  );
}

export default Preloader;