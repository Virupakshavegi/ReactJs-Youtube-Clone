import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utilities/constant";
// const selectedCategory = "New";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className=" flex  font-bold rounded-2xl m-3 p-2 text-white hover:bg-red-500"
          onClick={() => setselectedCategory(category.name)}
          style={{ background: category.name === selectedCategory && "red" }}
          key={category.name}
        >
          <span className="mr-4">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
