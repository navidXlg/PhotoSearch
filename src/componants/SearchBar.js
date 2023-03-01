


function SearchBar({onSubmit}){
    const handelClick = (term)=>{

        onSubmit("cars");
    }
    return (

        <div>
            <input></input>
            <button onClick = {handelClick}>CLICK</button>
        </div>
    )
};

export default SearchBar;