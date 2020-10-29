import React from "react";
export default function Movies(props) {
  let { title, rating, cast, ondelete } = props;
  let [data, setData] = React.useState([{ like: "🤍", watchlist: false }]);
  let handleLike = () => {
    let copy = [...data];
    copy[0].like = data[0].like === "🤍" ? "❤️" : "🤍";
    setData(copy);
  };
  let handleWatchlist = () => {
    //console.log("clicked");
    let copy = [...data];
    copy[0].watchlist = data[0].watchlist === true ? false : true;
    setData(copy);
  };
  return (
    <div className="card center">
      <div>
        <div className="">Title: {title}</div>
        <div className="">IMDB: {rating}</div>
      </div>
      <div className="">Cast: {cast}</div>
      <div className="btns center">
        <div className="like" onClick={handleLike}>
          {data[0].like}
        </div>
        <div
          className={
            data[0].watchlist
              ? "red-font btn watchlist center"
              : "black-font btn watchlist center"
          }
          onClick={handleWatchlist}
        >
          {data[0].watchlist ? "In watchlist" : "Add to watchlist"}
        </div>
        <div className="btn delete center" onClick={() => ondelete(title)}>
          Delete
        </div>
      </div>
    </div>
  );
}
