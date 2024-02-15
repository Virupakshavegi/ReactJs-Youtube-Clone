import React from "react";
import { logo } from "../utilities/constant";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" className="flex items-center mt-4 ">
        <img src={logo} alt="logo" className="h-10 w-10"></img>
      </Link>
      <SearchBar />
    </Stack>
    // <Stack className="flex flex-row p-2 justify-between bg-black">
    //   <Link to="/" className="flex items-center mt-4 ">
    //     <img src={logo} alt="logo" className="h-10 w-10"></img>
    //   </Link>
    //   <SearchBar className="flex items-end" />
    // </Stack>
  );
};

export default Navbar;
