import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" header sticky z-10  bg-black top-0 text-3xl flex justify-between text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Filmy<span className="text-white">Unboxing</span>
        </span>
      </Link>

      <Link to={"/add-movie"}>
        <h1 className="text-lg  text-white flex items-center cursor-pointer">
          <Button>
            <AddIcon className="mr-3" />{" "}
            <span className="text-white">Add New</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
