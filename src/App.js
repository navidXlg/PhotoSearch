import SearchBar from "./componants/SearchBar";
import Imgelist from "./componants/ImgeList";
import "./App.css";
import { useState } from "react";
import searchImg from "./api";

export default function App(){

    const[imges, setImege] = useState([]);
    const[loading, setLoading] = useState(false);

    const handelSubmit = async (item)=>{
       setLoading(true)
       const result = await searchImg(item);
       setImege(result);
       setLoading(false);
    };

    return (
        <div>
            <SearchBar onSubmit = {handelSubmit}/>
           {
            loading ? <p>Loading</p> :  <Imgelist imges = {imges}/>
            } 
        </div>
    );
};
