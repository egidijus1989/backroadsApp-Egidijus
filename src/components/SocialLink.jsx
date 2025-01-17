import React from "react";

const SocialLink = ({ link, itemClass }) => {
  return (
    <li>
      <a
        href={link.href}
        target="_blank"
        className={itemClass}
        rel="noreferrer"
      >
        <i className={link.icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
