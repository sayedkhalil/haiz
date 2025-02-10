import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import ProdItem from "./proditem";

const Rang5 = (props) => {

const[active,setactive]=useState("d-none")
const onlocation=(e)=>{
    props.items.setarray({...props.items.array,rang5:{...props.items.array.rang5,location:e.target.value}})
}
const onspace=(e)=>{
    props.items.setarray({...props.items.array,rang5:{...props.items.array.rang5,space:e.target.value}})
} 
const onplan=(e)=>{
    props.items.setarray({...props.items.array,rang5:{...props.items.array.rang5,plan:e.target.value}})
}
const onsakan=(e)=>{
    props.items.setarray({...props.items.array,rang5:{...props.items.array.rang5,sakan:e.target.value}})
} 
const onsakanloc=(e)=>{
  props.items.setarray({...props.items.array,rang5:{...props.items.array.rang5,sakanloc:e.target.value}})
}
const onnotes=(e)=>{
    props.items.setarray({...props.items.array,rang5:{...props.items.array.rang5,notes:e.target.value}})
}     
const ontime=(e)=>{
    props.items.setarray({...props.items.array,rang5:{...props.items.array.rang5,time:e.target.value}})
}   
const onsakany =(e)=>{
setactive(active=="d-none"?"d-block":"d-none")
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
<p className="text-end my-3">بيانات الموقع</p>
<div class="mb-3">
  <input type="text" class="form-control ffss" id="exampleFormControlInput1" placeholder="عنوان الموقع" onChange={onlocation}/>
</div>
<div class="mb-3">
  <input type="text" class="form-control ffss" id="exampleFormControlInput1" placeholder="مساحة الموقع"onChange={onspace}/>
</div>
<div class="form-check mb-3 form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onplan}/>
  <label class="form-check-label ffss" for="flexSwitchCheckDefault">هل يوجد مخطط</label>
</div>
<div class="form-check mb-3 form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onsakany}/>
  <label class="form-check-label ffss" for="flexSwitchCheckDefault">هل أنت من ملاك سكني/البيع على الخارطة في الرياض</label>
</div>
<div class={`mb-3 ${active}`}>
  <input type="text" class="form-control ffss" id="exampleFormControlInput1" placeholder="اسم المشروع"onChange={onsakanloc}/>
</div>
<div class={`mb-3 ${active}`}>
  <input type="text" class="form-control ffss" id="exampleFormControlInput1" placeholder="نموذج الوحدة السكنية"onChange={onsakan}/>
</div>
<div class="mb-3">
  <input type="text" class="form-control ffss" id="exampleFormControlInput1" placeholder="الوقت المتوقع للاستلام"onChange={ontime}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1 ffss" class="form-label">ملاحظات</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"onChange={onnotes}></textarea>
</div>
</div>
    );
}
 
export default Rang5;