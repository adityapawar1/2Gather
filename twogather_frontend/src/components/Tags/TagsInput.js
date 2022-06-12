import { Children, useState } from "react";

function TagsInput({ children }) {
  const [tags, setTags] = useState([]);

  

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    props.tagger(value);
    e.target.value = "";
  }

  function removeTag(index) {
    props.rtagger(index);
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <div className="p-2">
      <div className="flex flex-row gap-1">
        {children}
        {tags.map((tag, index) => (
          <div
            className="bg-gray-200 rounded-xl w-fit p-2 overflow-auto"
            key={index}
          >
            <span onClick={() => removeTag(index)}>{tag} &times;</span>
          </div>
        ))}
        <input
          onKeyDown={handleKeyDown}
          type="text"
          className="w-1/6 justify-end overflow-auto flex-grow"
          placeholder="Find Gatherings..."
        />
      </div>
    </div>
  );
}

export default TagsInput;
