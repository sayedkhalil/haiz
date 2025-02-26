import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import ProdItem from "./proditem";
import ProdItemm from "./proditemm";

const Rang4 = (props) => {

const rang4=[{src:"rang4-1.png",title:"غرفة الطعام"},{src:"rang4-2.png",title:"غرفة النوم الرئيسية"},{src:"rang4-3.png",title:"غرفة نوم شخصين"},
    {src:"rang4-4.png",title:"غرفة أطفال"},{src:"rang4-5.png",title:"غرفة معيشة"},{src:"rang4-6.png",title:"غرفة الخادمة"},
    {src:"rang4-7.png",title:"المدخل"},{src:"rang4-8.png",title:"المجلس"},{src:"rang4-9.png",title:"جلسة خارجية"},{src:"rang4-10.png",title:"أخرى"}]
const setarray =(t)=>{
    props.items.setarray({...props.items.array,rang4:t})
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
<p className="text-end mt-3">الفراغات</p>
{
    rang4.map(x=>(
<ProdItemm key={x.title} item={{src:x.src,title:x.title}} stat={{array:props.items.array.rang4,setarray}}   />

    ))
}
</div>
    );
}
 
export default Rang4;