import { React, useState } from "react";
import "./searchbar.css";
import TagsInput from "../Tags/TagsInput.js";
import searchIcon from "../../assets/search_icon.svg";

function SearchBar() {
  //We can add the list later and just say we didn't find any for the categories that don't exist
  return (
    <div className="w-1/2 border-black border-1 flex flex-row m-5 rounded-[5px]">
      <div className="w-full justify-end">
        <TagsInput>
          <img
            className="m-2"
            alt="search icon"
            src={searchIcon}
            width="25"
            height="25"
          />
        </TagsInput>
      </div>
    </div>
  );
}

export default SearchBar;
