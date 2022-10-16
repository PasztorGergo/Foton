import React from "react";

const SideBar = () => {
  return (
    <aside className="fixed left-8 bottom-32 -rotate-90">
      <ul className="flex gap-x-7  justify-evenly">
        <li className="group ">
          <a
            className="group-hover:opacity-100 opacity-70 transition-opacity"
            href="https://twitter.com/Foton"
          >
            Twitter
          </a>
        </li>
        <li className="group ">
          <a
            className="group-hover:opacity-100 opacity-70 transition-opacity"
            href="https://linkedin.com/Foton"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
