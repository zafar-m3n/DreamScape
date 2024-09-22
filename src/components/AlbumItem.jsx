import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, description, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-44 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} alt={name} className="rounded" />
      <p className="mt-2 mb-1 font-bold">{name}</p>
      <p className="text-sm text-slate-200">{description}</p>
    </div>
  );
};

export default AlbumItem;
