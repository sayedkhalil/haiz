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
import swal from 'sweetalert';

const Consuit = () => {
const[array,setarray]=useState({rang1:[],rang4:[],rang5:{},rang6:{}})
const[rang,setrang] =useState(0)  
const[acc,setacc] =useState('aler')  
const[val,setval] =useState(0)  

const[rat1,setrat1] =useState('text-secondary')  
const[rat2,setrat2] =useState('text-secondary')  
const[rat3,setrat3] =useState('text-secondary')  
const[rat4,setrat4] =useState('text-secondary')  
const[rat5,setrat5] =useState('text-secondary')  

const router = useRouter()
  const onrating=async(x)=>{
    if(x==1){
  setrat1('text-warning')
  setrat2('text-secondary')
  setrat3('text-secondary')
  setrat4('text-secondary')
  setrat5('text-secondary')
  setval(1)
    }
   else if(x==2){
    setrat1('text-warning')
    setrat2('text-warning')
    setrat3('text-secondary')
    setrat4('text-secondary')
    setrat5('text-secondary')
    setval(2)
  }
 else if(x==3){
    setrat1('text-warning')
    setrat2('text-warning')
    setrat3('text-warning')
    setrat4('text-secondary')
    setrat5('text-secondary')
    setval(3)
  }
 else if(x==4){
    setrat1('text-warning')
    setrat2('text-warning')
    setrat3('text-warning')
    setrat4('text-warning')
    setrat5('text-secondary')
    setval(4)
  }
 else if(x==5){
    setrat1('text-warning')
    setrat2('text-warning')
    setrat3('text-warning')
    setrat4('text-warning')
    setrat5('text-warning')
    setval(5)
  }
    
  
    
 
  

  
}
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
  const onhome =async()=>{
    if(val==0){
      setacc("aler")
     await router.replace("/")
    }else{
      const docRef = await setDoc(doc(db, "rating",d.toString()),{ val:val}); 

      setacc("aler")
      setrat1('text-secondary')
    setrat2('text-secondary')
    setrat3('text-secondary')
    setrat4('text-secondary')
    setrat5('text-secondary')
    await  router.replace("/")
    }


  }
  const onsend=async(e)=>{
    e.preventDefault() 
   if(array.rang6.name&&array.rang6.tel){
   const docRef = await setDoc(doc(db, "consults",array.rang6.id), array); 
   setarray({rang1:[],rang2:[],rang3:[],rang4:[],rang5:{},rang6:{}})
   setacc("aler-b")

   } 
   else{ alert("لابد من وجود الاسم ورقم الجوال")  }

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
      <div className={acc}>
        <div className='boxx mt-5 p-3'>
          <p className=' w-100 text-center h1 '>👏</p>
          <p className=' w-100 text-center h3 '>شكرًا تمت الإضافة</p>
          <p className=' w-100 text-center '>سيتم التواصل معكم في أقرب  وقت ممكن</p>
          <div> 
            <div className='star w-50 mx-auto mt-2'>
          <span onClick={(x)=>onrating(1)} class={`fa fa-star fa-lg h1 ${rat1}`} ></span>
           <span onClick={(x)=>onrating(2)} class={`fa fa-star fa-lg h1 ${rat2}`} ></span>
           <span onClick={(x)=>onrating(3)} class={`fa fa-star fa-lg h1 ${rat3}`} ></span>
           <span onClick={(x)=>onrating(4)} class={`fa fa-star fa-lg h1 ${rat4}`}></span>
           <span onClick={(x)=>onrating(5)} class={`fa fa-star fa-lg h1 ${rat5}`}></span>
           </div>
          <div className='mt-2 inptt'>
          <div></div>
          <button onClick={onhome} type="button" class="btn btn-primary btn-sm">العودة للصفحة الرئيسية</button> 
          </div>
  
          </div>

        </div>
 
       </div>
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