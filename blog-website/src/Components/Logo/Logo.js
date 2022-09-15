import react, { useState } from "react";
import "./Logo.css";

function Logo(props) {
  //   const dimensions = props.dimensions;
  const [dimensions] = useState(props.dimensions);

  return (
    <div className={` flex flex-col  justify-center items-center w-fit`}>
      <div
        className={`flex  flex-col  logo relative `}
        style={{
          width: dimensions * 6 + "rem",
          height: dimensions * 4 + "rem",
          gap: dimensions * 0.125 + "rem",
        }}
      >
        <div
          className={`logo-sign absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white  w-[58.33%] h-3/4 flex justify-center items-center text-9xl `}
          style={{
            fontSize: dimensions * 2 + "rem",
          }}
        >
          e
        </div>
        <div className={`h-1/2 w-100 bg-[#28b44b] logo-top  `}></div>
        <div className={`h-1/2 w-100 bg-[#0777b8] logo-bottom`}></div>
      </div>

      <div
        className=" font-extrabold tracking-wider"
        style={{
          fontSize: dimensions * 0.75 + "rem",
        }}
      >
        eCell MSIT
      </div>
      <div
        className=" font-mono "
        style={{
          fontSize: dimensions * 0.5 + "rem",
        }}
      >
        Ideate.Inspire.Invest
      </div>
    </div>
  );
}
export default Logo;
