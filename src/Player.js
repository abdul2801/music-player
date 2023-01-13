import { useRef, useState, useEffect } from "react";

import PlayerControl from "./PlayerControl";
import PlayerDetails from "./PlayerDetails";

export default function Player(props) {
  const audioelem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wid, setwid] = useState(0);
  useEffect(() => {
    if (isPlaying) {
      audioelem.current.play();
    } else {
      audioelem.current.pause();
    }
    const interval = setInterval(() => {
      console.log(audioelem)
      setwid(audioelem.current.currentTime / audioelem.current.duration * 100 );
    }, 1000);

  });

  const SkipSong = (fd = true) => {
    if (fd) {
      if (props.CurrentTrack == props.songs.length - 1) {
        props.setCurrentTrack(0);
      } else {
        props.setCurrentTrack(props.CurrentTrack + 1);
      }
    } else {
      if (props.CurrentTrack == 0) {
        props.setCurrentTrack(props.songs.length - 1);
      } else {
        props.setCurrentTrack(props.CurrentTrack - 1);
      }
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="card" style={{ width: "18rem ", alignContent: "center" }}>
        <audio
          ref={audioelem}
          src={props.songs[props.CurrentTrack].src}
        ></audio>
        <img
          className="card-img-top"
          src={props.songs[props.CurrentTrack].img_src}
        ></img>

        <div className="card-body">
          <div>
            <div class="progress" role="progressbar">
              <div class="progress-bar" style={{ width: wid+"%" }}></div>
            </div>
          </div>
          <PlayerDetails song={props.songs[props.CurrentTrack]} />
          <PlayerControl
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            SkipSong={SkipSong}
          />
        </div>
      </div>
    </div>
  );
}
