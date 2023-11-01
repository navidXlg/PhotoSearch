import axios from "axios";

const searchImg = async(item)=>{
    
    try{
        const info = await axios.get("https://api.unsplash.com/search/photos", {
             headers:{
                 Authorization : " Client-ID 2XM9bsVv6Fd3KzNlpKsz1pt-hJCCAGyTmJAb19nyRTU"
             },
             params:{
                 query : item
             }
         });
         return info.data.results;

    }catch(error){
        console.log(error);
    }
};

export default searchImg;