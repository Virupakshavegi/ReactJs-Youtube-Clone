import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Height, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import APIFetching from "../utilities/APIFetching";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    APIFetching(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => setVideos(data.items)

      // {
      // if (data) {
      //   console.log(data);
      //   setVideos(data.items);
      // }
      // }
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2023 Virupaksha
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" className=" p-4 font-bold mb-2 text-white">
          {selectedCategory} <span className="text-red-600 ">videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
