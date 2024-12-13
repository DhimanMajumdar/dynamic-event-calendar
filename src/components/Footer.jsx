import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto w-full bottom-0 left-0 ">
      <p className="text-sm">&copy; {new Date().getFullYear()} Dynamic Event Calendar. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
