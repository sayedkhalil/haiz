import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import ProdItem from "./proditem";

const Rang6 = (props) => {
  const d = new Date();
    const onname=(e)=>{
        props.items.setarray({...props.items.array,rang6:{...props.items.array.rang6,name:e.target.value,case:"1",id:d.toString()}})
    }
    const ontel=(e)=>{
        props.items.setarray({...props.items.array,rang6:{...props.items.array.rang6,tel:e.target.value}})
    } 
  
    const ontime=(e)=>{
        props.items.setarray({...props.items.array,rang6:{...props.items.array.rang6,time:e.target.value}})
    }   
return (  
        <div className=" rela rtl">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<p className="text-end my-3">بيانات العميل</p>
<div class="mb-3">
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="اسم العميل" onChange={onname} />
</div>
<div class="mb-3">
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" رقم الواتساب"onChange={ontel} />
</div>

<div class="mb-3">
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="وقت التواصل"onChange={ontime}/>
</div>
<p className="text-center div-des dactive-billx">سيتم التواصل معكم في أقرب وقت</p>
</div>
    );
}
 
export default Rang6;