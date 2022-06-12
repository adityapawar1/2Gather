import React from "react";
import "./tags.css";
import TagsInput from "./TagsInput.js";

// git pls
class Tags extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <React.Fragment>
        <TagsInput />
      </React.Fragment>
    );
  }
}

export default Tags;
