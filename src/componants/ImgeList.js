import ImgeShow from './ImgeShow';

export default function Imgelist({imges}){
    console.log(imges)
    return <>
              {
                imges.map(item => <ImgeShow key={item.id} img={item} />)
              }
           </>
};
