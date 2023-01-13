export default function PlayerDetails(props) {
  return (
    <div>
     

      <div>
        <h5 className="card-title">{props.song.title}</h5>
        <p className="card-text">{props.song.artist}</p>
      </div>
    </div>
  );
}
