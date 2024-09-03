import React from "react";
import { IMG_CDN_URL } from "../utils/contants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
