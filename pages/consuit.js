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
import Xrang1 from '../layout/xrang1';
const Consuit = () => {
const[array,setarray]=useState({rang1:[],rang4:[],rang5:{},rang6:{}})
const[rang,setrang] =useState(0)  
const router = useRouter()

const d = new Date();
  const df =()=>{
    if(rang==0){
       return ( <Rang1 items={{array,setarray}}/>)
      }
       else if(rang==1){
       return ( <Rang2 items={{array,setarray}}/>)
       }
       else if(rang==2){
       return ( <Rang3 items={{array,setarray}}/>)
      }
      else if(rang==3){
       return ( <Rang4 items={{array,setarray}}/>)
      }
      else if(rang==4){
       return ( <Rang5 items={{array,setarray}}/>)
      }
      else if(rang==5){
       return ( <Rang6 items={{array,setarray}}/>)
      }
  }
  const onsend=async(e)=>{
    e.preventDefault() 
   if(array.rang6.name&&array.rang6.tel){
   const docRef = await setDoc(doc(db, "consults",array.rang6.id), array); 
   setarray({rang1:[],rang2:[],rang3:[],rang4:[],rang5:{},rang6:{}})
   router.replace("/") } else{ alert("لابد من وجود الاسم ورقم الجوال")  }
  }
    return (
      <div className='w-100 p-2 boxs m-0 '>
      <Head>
        <title>خدمة استشارة</title> 
       
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="" type="image/x-icon" />
        <meta name="google-site-verification" content="_OtuybINzdg_u7HN4n2xCk83du_TC8CdaKcPR0p-2Bg" />
      </Head>
      <h5 className='text-center tt'>خدمة استشارة</h5>

      <div className='w-100 mt-3 row  rang mx-0 p-0 boxs '>
      <div className='line  '></div>
       <div className='col-3 '>
       <div className={rang<1?'bill active-bill':'bill  dactive-bill'}></div>
       <p className={rang<1?'rang-bil active-billx ':'rang-bil  dactive-billx'}>نوع الاستشارة</p>
       </div>

       <div className='col-3 '>
       <div className={rang<4?'bill active-bill ':'bill  dactive-bill'}></div>
       <p className={rang<4?'rang-bil active-billx ':'rang-bil  dactive-billx'}>الفراغات</p>
       </div>
       <div className='col-3 '>
       <div className={rang<5?'bill active-bill ':'bill  dactive-bill'}></div>
       <p className={rang<5?'rang-bil active-billx ':'rang-bil  dactive-billx'}>بيانات الموقع</p>
       </div>
       <div className='col-3 '>
       <div className={rang<6?'bill active-bill ':'bill  dactive-bill'}></div>
       <p className={rang<6?'rang-bil active-billx ':'rang-bil  dactive-billx'}>بيانات العميل</p>
       </div>
      </div>
      <div className='container'>
        
       {rang==0? <Xrang1 items={{array,setarray}}/>:""
       }
         {rang==1? <Rang4 items={{array,setarray}}/>:""
       }
       {rang==2? <Rang5 items={{array,setarray}}/>:""
       }
       {rang==3? <Rang6 items={{array,setarray}}/>:""
       }
 
      </div>
      <div className='direction row w-100  mt-2 mx-0 p-0 boxs'>
        {
          rang==0?
          <div className='col-2 p-1   row'>
            </div>:
         
           <img className='col-2 ' src="up.svg" alt="" onClick={()=>setrang(rang-1)}/>
        }
        
        <div className='col-8'></div>
        {
          rang==3?            <img className="col-2 " src="next.svg" alt="" onClick={onsend}/>
          : 
            <img className="col-2 " src="next.svg" alt="" onClick={()=>setrang(rang+1)}/>
      
            
        }
       
       </div>
    </div>
    );
}
 
export default Consuit;