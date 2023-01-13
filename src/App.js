import { useState,useEffect } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css"
// import PlayerControl from "./PlayerControl";
import "bootstrap-icons/font/bootstrap-icons.css";
import Player from "./Player";
function App() {
  const [CurrentTrack, setCurrentTrack] = useState(0);
  const [songs, setSongs] = useState([
    {
      title: "$orries",
      artist: "Peachy!",
      album: " Shiloh",
      track: "$orries",
      year: "1",
      img_src: "./songs_images/$orries_Cover (front)_e.jpg",
      src: "./songs/$orries.mp3",
    },
    {
      title: "[oops]",
      artist: "potsu",
      album: "[oops]",
      track: "1",
      year: "",
      img_src: "./songs_images/[oops]_Cover (front)_e.jpg",
      src: "./songs/[oops].mp3",
    },
  ]);
    
  return (
    <div className="App" >
      <Player
        songs={songs}
        setCurrentTrack={setCurrentTrack}
        CurrentTrack={CurrentTrack}
      />
    </div>
  );
}

export default App;
