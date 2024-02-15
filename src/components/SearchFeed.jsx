import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Height, Typography } from "@mui/material";

import Videos from "./Videos";
import APIFetching from "../utilities/APIFetching";
import { useParams } from "react-router-dom";
const Feed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    APIFetching(`search?part=snippet&q=${searchTerm}`).then(
      (data) => setVideos(data.items)

      // {
      // if (data) {
      //   console.log(data);
      //   setVideos(data.items);
      // }
      // }
    );
  }, [searchTerm]);
  return (
    <Box>
      <Typography variant="h4" className=" p-4 font-bold mb-2 text-white">
        Search results for: <span className="text-red-600 ">{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
