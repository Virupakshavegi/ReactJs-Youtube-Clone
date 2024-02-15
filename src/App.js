import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
