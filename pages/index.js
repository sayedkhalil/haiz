   
import Head from 'next/head'
import Image from 'next/image'
import Cover from '../layout/cover'
import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Home({getdata}) {
  return (
    <div>
      <Head>
        <title>{getdata.getinfo.name}</title> 
        <meta name="description" content={getdata.getinfo.des} />
        <meta name="keywords" content={getdata.getinfo.key} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"></link>
        <link rel="icon" href={getdata.getinfo.logo} type="image/x-icon" />
        <meta name="google-site-verification" content="_OtuybINzdg_u7HN4n2xCk83du_TC8CdaKcPR0p-2Bg" />
      </Head>
          <Cover data={getdata.getcov} />
    
    </div>
  )
}
export async function getServerSideProps(){
  const de=[]
  const opnionarr=[]
  const pro=[]
  const neww =[]
  const infoRef = doc(db, "info", "info");
  const infoSnap = await getDoc(infoRef)
  const getinfo =  infoSnap.data()?infoSnap.data().info:{}
  const docRef = doc(db, "cover", "cover");
  const docSnap = await getDoc(docRef);
  const getcover =  docSnap.data()?docSnap.data().covers:[]
  const docRefpar = doc(db, "partn", "partn");
  const docSnapar = await getDoc(docRefpar);
  const getpartn =  docSnapar.data()?docSnapar.data().partns:[]
  const codelist = collection(db, 'category');
  const codesnapshot = await getDocs(codelist);
  const catolist = codesnapshot.docs?codesnapshot.docs.map(doc =>{ de.push(doc.data());   }):de
  const prodlist = collection(db, 'broductes');
  const prodsnapshot = await getDocs(prodlist);
  const products =async()=>await prodsnapshot.docs?prodsnapshot.docs.map(doc =>{ pro.push({code:doc.data().code,
  title:doc.data().title,category:doc.data().category,imges:doc.data().imges[0]});   }):[]
  const opnion = collection(db, 'opnion');
  const opnionsnap = await getDocs(opnion);
  const getopnion =async()=> opnionsnap?opnionsnap.docs.map(doc =>{opnionarr.push(doc.data());   }):[];
  products()
  getopnion()  
  const newlist = collection(db, 'broductes');
  const n= query(newlist, where("category", "==","أبواب حديد"));
  const nprodsnapshot= await getDocs(n);
   nprodsnapshot?nprodsnapshot.forEach(doc =>{ neww.push({code:doc.data().code,
      title:doc.data().title,category:doc.data().category,imges:doc.data().imges[0]})  }):neww
     return{
      props:{getdata:{data:de,products:pro,getcov:getcover,getpart:getpartn,getopn:opnionarr,getinfo:getinfo,getnew:neww}}
           }
}

