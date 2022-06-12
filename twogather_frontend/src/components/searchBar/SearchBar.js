import { React, useState } from "react";
import "./searchbar.css";
import TagsInput from "../tags/TagsInput.js";
import searchIcon from "../../assets/search_icon.svg";

function SearchBar() {
  //We can add the list later and just say we didn't find any for the categories that don't exist
  return (
    <div className="w border-black border-1 flex flex-row rounded-[5px]">
      <div className="w-full justify-end">
        <TagsInput>
          <img
            className="m-2"
            alt="search icon"
            src={searchIcon}
            width="20"
            height="20"
          />
        </TagsInput>
      </div>
    </div>
  );
}

export default SearchBar;
