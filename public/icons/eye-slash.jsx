import React from "react";

function EyeSlashIcon({ stroke = 12 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path fill="none" d="M0 0H256V256H0z"></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M48 40L208 216"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M154.907 157.598a40 40 0 01-53.814-59.196M73.994 68.594C33.225 89.239 16 128 16 128s32 71.992 112 71.992a118.024 118.024 0 0053.998-12.594m26.612-18.299C230.41 149.572 240 128 240 128s-32-72.008-112-72.008a125.32 125.32 0 00-20.682 1.684m28.21 31.032a40.024 40.024 0 0132.297 35.529"
      ></path>
    </svg>
  );
}

export default EyeSlashIcon;
