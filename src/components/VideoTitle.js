import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 sm:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl sm:text-5xl font-bold">{title}</h1>
      <p className="hidden sm:block py-6 px-1 text-lg w-1/4">{overview}</p>
      <div className="sm:my-0 my-3">
        <button className="bg-white text-black px-2 py-1 sm:px-8 sm:py-3 border text-md sm:text-xl  rounded-lg font-bold hover:bg-opacity-80">
          &#9655; Play
        </button>
        <button className="hidden sm:inline-block bg-gray-500 text-white px-6 py-3 border text-xl bg-opacity-50 rounded-lg mx-3 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
