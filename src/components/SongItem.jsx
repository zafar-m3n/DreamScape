import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, description, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      className="min-w-44 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      onClick={() => playWithId(id)}
    >
      <img src={image} alt={name} className="rounded" />
      <p className="mt-2 mb-1 font-bold">{name}</p>
      <p className="text-sm text-slate-200">{description}</p>
    </div>
  );
};

export default SongItem;
