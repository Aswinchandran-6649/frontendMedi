import React from "react";

function Footer() {
  return (
    <footer className="bg-linear-to-r from-red-500 via-orange-500 to-yellow-400 dark:bg-gray-500 text-white text-center py-4 mt-10">
      <div className="text-sm">
        <p>&copy; {new Date().getFullYear()} MediTrack</p>
        <p className="mt-1">Stay Healthy, Stay On Time 💊</p>
      </div>
      <div className="mt-2 flex justify-center flex-wrap gap-3 text-sm">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Support
        </a>
      </div>
    </footer>
  );
}

export default Footer;

