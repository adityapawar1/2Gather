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
        <TagsInput tagger={(ntag)=>{this.props.tagger(ntag)}} rtagger={(i)=>{this.props.rtagger(ntag)}}/>
      </React.Fragment>
    );
  }
}

export default Tags;
