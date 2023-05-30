import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MovieContextProvider } from "./context/movieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MovieContextProvider>
        <App />
    </MovieContextProvider>
);
