import { React, useState } from "react";
import TextField from "@mui/material/TextField";
// import List from "./List";
import "./searchbar.css";
import TagsInput from '../Tags/TagsInput'

function SearchBar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      {/* <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> */}
      <TagsInput/>
      {/* <List input={inputText} /> */}
    </div>
  );
}

export default SearchBar;