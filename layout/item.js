import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import ProdItem from "./proditem";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where} from "firebase/firestore";
const Item = (props) => {
   const[data,setdata]=useState(props.data.dat)
   useEffect(() => {
    
    return () => {
      setdata(props.data.dat)
    };
   }, [data]);
   const onedite=async(e)=>{
  if(props.data.dat.rang2){
    const docRef = await setDoc(doc(db, "services",data.rang6.id ), {...data,rang6:{...data.rang6,case:e.target.value}});    
  }else{
    const docRef = await setDoc(doc(db, "consults",data.rang6.id ), {...data,rang6:{...data.rang6,case:e.target.value}});    
  }
   }
return (  
        <div className= {`w-100 p-2 bg-ite fixi ${props.data.stat} h-100`}>
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<button type="button" class="btn-close" aria-label="Close" onClick={()=>props.data.setactive("fda")}></button>
<div className=" text-center dactive-billx h3"> {props.data.dat.rang6.name}</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang6.tel?props.data.dat.rang6.tel:""}</p>
<p className="text-end col-6 my-3 ">رقم الجوال</p>
</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang5.location?props.data.dat.rang5.location:""}</p>
<p className="text-end col-6 my-3 ">عنوان الموقع</p>
</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang5.space?props.data.dat.rang5.space:""}</p>
<p className="text-end col-6 my-3 ">مساحة الموقع</p>
</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang5.time?props.data.dat.rang5.time:""}</p>
<p className="text-end col-6 my-3 ">الوقت المتوقع للاستلام</p>
</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang5.plan?props.data.dat.rang5.plan:""}</p>
<p className="text-end col-6 my-3 ">مخطط الموقع</p>
</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang5.notes?props.data.dat.rang5.notes:""}</p>
<p className="text-end col-6 my-3 ">ملاحظات</p>
</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang5.sakanloc?props.data.dat.rang6.sakanloc:""}</p>
<p className="text-end col-6 my-3 ">اسم المشروع</p>
</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang5.sakan?props.data.dat.rang5.sakan:""}</p>
<p className="text-end col-6 my-3 ">رقم النموذج</p>
</div>
<div className="row w-100">
<p className="text-center col-6 my-3 bg-light border-1">{props.data.dat.rang6.case?props.data.dat.rang6.case:""}</p>
<p className="text-end col-6 my-3 ">الحالة</p>
</div>
<div class="mb-3">
<p className="text-end my-2 border-1">نمط التأثيث</p>
  <div className="active-bill border-1 p-1 ">
  {props.data.dat.rang1?props.data.dat.rang1.map(x=>(
    <span className="mx-1">{x}</span>
  )):""}
    
  </div>
</div>
<div class="mb-3">
<p className="text-end my-2 border-1">نمط الستائر</p>
  <div className="active-bill border-1 p-1 ">
  {props.data.dat.rang2?props.data.dat.rang2.map(x=>(
    <span className="mx-1">{x}</span>
  )):""}
  </div>
</div>
<div class="mb-3">
<p className="text-end my-2 border-1">الباقات الإضافية</p>
  <div className="active-bill border-1 p-1 ">
  {props.data.dat.rang3?props.data.dat.rang3.map(x=>(
    <span className="mx-1">{x}</span>
  )):""}
  </div>
</div>
<div class="mb-3">
<p className="text-end my-2 border-1">الفراغات</p>
  <div className="active-bill border-1 p-1 ">
  {props.data.dat.rang4?props.data.dat.rang4.map(x=>(
    <span className="mx-1">{x}</span>
  )):""}
  </div>
</div>
<select class="form-select" aria-label="Default select example" onChange={onedite}>
      <option selected>اتخذ اجراء</option>
      <option value="2">تم التواصل</option>
      <option value="3">انتظار</option>
      <option value="4">تم الرفض</option>
      </select>
<div className="row mt-5 text-center p-5 w-100">
<a className="col-6 p-5"  href={`https://api.whatsapp.com/send?phone=${props.data.dat.rang6.tel?props.data.dat.rang6.tel:""}`}><i id=""  className="fab fa-whatsapp active-billx  fa-3x "></i></a>
<a className="col-6 p-5" href={`tel:${props.data.dat.rang6.tel?props.data.dat.rang6.tel:""}`}><i class="fas fa-phone active-billx fa-3x"></i></a>
</div>
</div>

    );
}
 
export default Item;