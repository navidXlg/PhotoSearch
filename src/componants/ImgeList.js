import ImgeShow from './ImgeShow';

function Imgelist({imeges}){

    const imge = (item)=>{

        return <ImgeShow key={item.id} img={item}/>
    };

    return <div>{imge}</div>
};

export default Imgelist