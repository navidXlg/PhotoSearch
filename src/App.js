import SearchBar from "./componants/SearchBar";


function App(){

    const handelSubmit = (item)=>{

        console.log("this is what we are searching for" , item);
        // searchImg(item);

    }

    return (
        <div>
            <SearchBar onSubmit = {handelSubmit}/>
        </div>
    )
};

export default App;