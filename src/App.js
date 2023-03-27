import SearchBar from "./componants/SearchBar";
import Imgelist from "./componants/ImgeList";
import "./App.css"
import { useState } from "react";
import searchImg from "./api";

function App(){

    const[imeges, setImege] = useState([]);
    const handelSubmit = async (item)=>{
       const result = await searchImg(item);
       setImege(result);
    };

    return (
        <div>
            <SearchBar onSubmit = {handelSubmit}/>
            <Imgelist img = {imeges}/>
        </div>
    );
};

export default App;