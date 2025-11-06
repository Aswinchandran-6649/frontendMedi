import React from "react";
import { Link } from "react-router-dom";

function Pnf() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        style={{ position: "absolute" }}
      >
        <img
          className="w-400 h-150"
          src="https://usbooths.com/assets/page-not-found-1-13d6e532.gif"
          alt=""
        />
        <div className="m-5">
          <button className="bg-blue-500 rounded-2xl py-2 px-3 font-bold">
            <Link to={'/'}>Go back to Home</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pnf;
