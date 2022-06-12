import { Children, useState } from "react";

function TagsInput({ children }, props) {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    // props.tagger(value);
    e.target.value = "";
  }

  function removeTag(index) {
    // props.rtagger(index);
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <div className="">
      <div className="flex flex-row gap-1">
        {children}
        {tags.map((tag, index) => (
          <div
            className="tag-item m-1"
            key={index}
          >
            <span>{tag}</span>
            <span className="close" onClick={() => removeTag(index)}> &times;</span>
          </div>
        ))}
        <input
          onKeyDown={handleKeyDown}
          type="text"
          className="w-1/6 justify-end overflow-auto flex-grow outline-0"
          placeholder="Find Gatherings..."
        />
      </div>
    </div>
  );
}

export default TagsInput;
