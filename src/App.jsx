import React from "react";
import "./styles.css";
import Movies from "./Movies";
export default function App() {
  let [moviesList, setMoviesList] = React.useState([
    {
      title: "3 Idiots",
      cast: "Aamir Khan, Madhavan, Sharman Joshi",
      rating: "8.4"
    },
    { title: "Raatchasan", cast: "Vishnu Vishal, Radha Ravi", rating: "8.7" },
    {
      title: "Andhadhun",
      cast: "Ayushmann Khurrana, Tabu, Radhika Apte",
      rating: "8.3"
    },
    {
      title: "Bhaag Milkha Bhaag",
      cast: "Farhan Akhtar, Sonam Kapoor",
      rating: "8.2"
    },
    {
      title: "OMG: Oh My God!",
      cast: "Paresh Rawal, Akshay Kumar",
      rating: "8.1"
    },
    {
      title: "Special 26",
      cast: "Akshay Kumar, Anupam Kher, Manoj Bajpayee",
      rating: "8.0"
    }
  ]);
  let handleDelete = (title) => {
    let temp = moviesList.filter((movie) => movie.title !== title);
    setMoviesList(temp);
  };
  return (
    <div className="App">
      {moviesList.map((movie) => (
        <Movies
          title={movie.title}
          cast={movie.cast}
          rating={movie.rating}
          ondelete={handleDelete}
          key={movie.title}
        />
      ))}
    </div>
  );
}
