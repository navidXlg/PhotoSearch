import axios from "axios";

const searchImg = async(item)=>{

   const info = await axios.get("https://api.unsplash.com/search/photos", {
        headers:{
            Authorization : " Client-ID"
        },
        params:{
            query : item
        }
    });

    return info;
};

export default searchImg;