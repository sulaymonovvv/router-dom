import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-ceneter bg-[#fed766] p-4">
      <div>Logo</div>
      <div>
        <ul className="flex justify-between items-ceneter gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Footer;
