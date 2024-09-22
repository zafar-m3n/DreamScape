import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 text-white text-2xl font-bold">Albums</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              image={album.image}
              name={album.name}
              description={album.desc}
              id={album.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 text-white text-2xl font-bold">Top Songs</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <SongItem
              key={index}
              image={song.image}
              name={song.name}
              description={song.artist}
              id={song.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
