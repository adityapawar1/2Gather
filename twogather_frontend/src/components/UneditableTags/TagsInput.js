import { useState } from 'react';
import events from './events.json';

function TagsInput(){
    const id = 4;
    const [tags, setTags] = useState(events.events[id].tags);

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="p-2">
            { tags.map((tag, index) => (
                <div className="tag-item m-1" key={index}>
                    <span className="ml-1 text">{tag}</span>

                </div>
            )) }
            
        </div>
    )
}

export default TagsInput;