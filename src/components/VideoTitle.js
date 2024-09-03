import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 px-1 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black px-8 py-3 border text-xl  rounded-lg font-bold hover:bg-opacity-80">
          &#9655; Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-3 border text-xl bg-opacity-50 rounded-lg mx-3 ">
          More Info
        </button>
      </div>
    </div>
  );  
};

export default VideoTitle;
