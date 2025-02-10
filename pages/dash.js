import React from 'react';
import Head from "next/head";
import { useRouter } from "next/router"
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where} from "firebase/firestore";
import Rang1 from '../layout/rang1';
import Rang2 from '../layout/rang2';
import Rang3 from '../layout/rang3';
import Rang4 from '../layout/rang4';
import Rang5 from '../layout/rang5';
import Rang6 from '../layout/rang6';
import Item from '../layout/item';
export const getStaticProps =async()=>{
  const de=[]
  const pro=[]
 
  const codelist = collection(db, 'consults');
  const codesnapshot = await getDocs(codelist);
  const catolist = codesnapshot.docs?codesnapshot.docs.map(doc =>{ de.push(doc.data());   }):de
  const prodlist = collection(db, 'services');
  const prodsnapshot = await getDocs(prodlist);
  const products =async()=>await prodsnapshot.docs?prodsnapshot.docs.map(doc =>{ pro.push(doc.data())}):[]
    products()

 
      return{
      props:{getdata:{consults:de,services:pro}}
           }
}

const Dash = ({getdata}) => {
const[items,setitems]=useState(getdata.services?getdata.services:[])
const[filt,setfilt]=useState(getdata.services?getdata.services:[])
const[active,setactive]=useState("fda")
const[item,setitem]=useState(items[0])
const[b1,setb1]=useState("dbbt")
const[b2,setb2]=useState("bbt")
const onchan=(e)=>{
  setitems(filt.filter(x=>(x.rang6.case==e.target.value)))
}
    return (
      <div className='w-100 p-2  boxs m-0 '>
      <Head>
        <title>خدمة التأثيث</title> 
       
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="" type="image/x-icon" />
        <meta name="google-site-verification" content="_OtuybINzdg_u7HN4n2xCk83du_TC8CdaKcPR0p-2Bg" />
      </Head>
      <Item data={{dat:item,stat:active,setactive}} />
      <div className='row w-100 p-2  boxs m-0 mb-2'>
        <div className='col-6 p-2'>
         <div className={`w-100  text-center py-1 ${b1}`} onClick={()=>{setitems(getdata.services?getdata.services:[]);setfilt(getdata.services?getdata.services:[]);setb1("bbt");setb2("dbbt")}}>
         خدمات التأثيث
         </div>
        </div>
        <div className='col-6 p-2'>
         <div className={`w-100  text-center py-1 ${b2}`} onClick={()=>{setitems(getdata.consults?getdata.consults:[]);setfilt(getdata.consults?getdata.consults:[]);setb1("dbbt");setb2("bbt")}}>
         خدمات الاستشارة
         </div>
        </div>
      </div>
      <select class="form-select ffss" aria-label="Default select example" onChange={onchan}>
      <option selected>فلترة الطلبات</option>
      <option value="1">جديد</option>
      <option value="2">تم التواصل</option>
      <option value="3">انتظار</option>
      <option value="4">تم الرفض</option>
      </select>
      <div className='w-100 p-2 row  boxs m-0 '>
        {
          items.map(x=>(
            <div key={x.rang6.name} className='w-100 p-2 my-1 active-bill rounded ffss text-end' onClick={()=>{setitem(x);setactive("fa")}}>
               {x.rang6.name?x.rang6.name:""}
            </div>
          ))
        }
       </div>
    </div>
    );
}
 
export default Dash;