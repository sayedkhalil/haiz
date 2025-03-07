import React, { useState } from 'react';
import Head from "next/head";
import { useRouter } from "next/router"
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where} from "firebase/firestore";
const Login = () => {
    const [mail, setmail] = useState("");
    const [pass, setpass] = useState("");
    const [error, setError] = useState('');
    const router = useRouter()
       const handlename = (e) => {
      setmail(e.target.value);
      setError('');
    };
    const handlepass = (e) => {
        setpass(e.target.value);
        setError('');
      };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     
    var docRef = doc(db, "user", pass);
    const infoSnap = await getDoc(docRef)
    if(infoSnap.data().email==mail){
      localStorage.setItem("uid",infoSnap.data().uid)
      router.push('/dash')
    }
     else{
        alert("تأكد من صحة البريد والرقم السري")
     }
    };
  
    return (
<div className="w-100 p-0  boxs m-0">                <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
   <title>حيز لتصميم</title>
   <link rel="icon" href="wew.png" type="image/x-icon" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"></link>
        </Head>
      <div className="w-100 p-0  boxs m-0">
        <h5 className='text-center'>تسجيل الدخول</h5>
        <form onSubmit={handleSubmit}className="my-5 text-center">
          <div className='w-100 row'>
          <label className='mb-3 col-3' htmlFor="email">Email</label>
          <input
            className='mb-3 col-9'
            type="text"
            autoComplete="off"
            onChange={handlename}
            name="email"
          />
          <label className='col-3' htmlFor="password">Password</label>
          <input
            className=' col-9'
            type="password"
            autoComplete="off"
            onChange={handlepass}
            name="password"
          />
          <button 
          className='mt-3'
          type="submit">Submit</button>
          <p className="form__error">{error}</p>
          </div>
        </form>
        
      </div>
      </div>
    );
}
 
export default Login;