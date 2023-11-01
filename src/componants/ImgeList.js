import ImgeShow from './ImgeShow';
import "./ImgeList.css";

export default function Imgelist({imges}){
    return <div className='img-list'>
              {
                imges.map(item => <ImgeShow key={item.id} img={item} />)
              }
           </div>
};
