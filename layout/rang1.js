import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import ProdItem from "./proditem";

const Rang1 = (props) => {

const rang1=[{src:"rang1-1.png",title:"نمط منتصف القرن"},{src:"rang1-2.png",title:"نمط تقليدي حديث"},
    {src:"rang1-3.png",title:"نمط حديث"},{src:"rang1-4.png",title:"نمط بوهيمي"},{src:"rang1-5.png",title:"نمط السكندنافي"},
    {src:"rang1-6.png",title:"نمط شعبي حديث"},,{src:"rang1-7.png",title:"نمط معاصر"}]
const setarray =(t)=>{
    props.items.setarray({...props.items.array,rang1:t})
}
       return (  
        <div className=" rela row">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<p className="text-end mt-3">اختر نمط التأثيث</p>
{
    rang1.map(x=>(
<ProdItem key={x.title} item={{src:x.src,title:x.title}} stat={{array:props.items.array.rang1,setarray}}  />

    ))
}
</div>
    );
}
 
export default Rang1;