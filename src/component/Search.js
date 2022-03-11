import React, { useState } from "react";
import './Search.css'

const Search = () => {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text);
        setText("")
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type={"text"} placeholder="Search" value={text} onChange={(e) => setText(e.target.value)}></input>
        </form>
    )
}

export default Search