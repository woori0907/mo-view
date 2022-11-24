import { useRef } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Home from "./routes/Home";

function App() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    console.log("scroll!");
  };

  return (
    <div onScroll={handleScroll}>
      <SearchBar />
      <Outlet />
    </div>
  );
}

export default App;
