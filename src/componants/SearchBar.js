import { useState } from "react";
import "./searchBar.css"

function SearchBar({onSubmit}){

    const[item, itemSetter] = useState("");
    
    const handelchangr = (event)=>{
        itemSetter(event.target.value)
    };
    const handelForm = (event)=>{
        event.preventDefault();
        onSubmit(item);
    };


    return (
        <form onSubmit={handelForm} className = "form-main">
            <label>Navid search </label>
            <input value={item} onChange={handelchangr}></input>
        </form>
    )

};

export default SearchBar;