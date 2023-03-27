function ImgeShow({img}){

    return (
        <img src={img.urls.small} alt={img.alt_description}></img>
    )
};

export default ImgeShow;