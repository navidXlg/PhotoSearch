import "./imgeShow.css";

export default function ImgeShow({img}){
    console.log(img)
    return (
        <div className="card">
         <div className="card-inner">
          <div className="card-front">
            <img className="img" src={img.urls.small} alt={img.alt_description}></img>
          </div>
        <div className="card-back">
         <p>{img.alt_description}</p>
         </div>
        </div>
       </div>
    )
};
