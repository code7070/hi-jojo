import { useEffect, useState } from "react";

const BlockMapper = ({ type = "", ...block }) => {
  const value = block[type].rich_text[0].plain_text;
  if (type === "heading_1") return <h1 className={type}>{value}</h1>;
  else if (type === "paragraph") return <p className={type}>{value}</p>;
  return <div>{value}</div>;
};

export default function NotionRenderer({ blocks = [] }) {
  const [style, setStyle] = useState("default");

  return (
    <>
      <div className="btn-group mt-10 mb-6">
        <button
          className={`btn ${style === "default" ? "" : "btn-outline"} btn-primary `}
          onClick={() => setStyle("default")}
        >
          Default
        </button>
        <button
          className={`btn ${style === "stylish" ? "" : "btn-outline"} btn-primary`}
          onClick={() => setStyle("stylish")}
        >
          Stylish
        </button>
      </div>
      <div className={`duper-notion duper-pages duper-style-${style}`}>
        {blocks.map((block) => (
          <BlockMapper key={block.id} style={style} {...block} />
        ))}
      </div>
    </>
  );
}
