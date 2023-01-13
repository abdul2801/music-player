export default function PlayerControl(props) {
  return (
    <div>
     

      <button className="btn btn-primary m-1 ">
        <i class="bi bi-skip-backward-btn" onClick={() => props.SkipSong(false) }></i>
      </button>
      <button className="btn btn-primary m-3" onClick={() => props.setIsPlaying(!props.isPlaying)}>
        <i className={props.isPlaying ? "bi bi-pause" : "bi bi-play"} ></i>
      </button>
      <button className="btn btn-primary m-1" onClick={() => props.SkipSong() }>
        <i class="bi bi-skip-forward-btn"></i>
      </button>
    </div>
  );
}
