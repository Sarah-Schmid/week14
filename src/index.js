import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movie-list.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(MovieList());
