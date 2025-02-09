import Head from "next/head";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";
const ProdItemm = (props) => {
    const[active,setactive]=useState(props.stat.array.includes(props.item.title)==false?false:true)
    const o =(y)=>{
      if(active==false)
      {
        setactive(true)
        props.stat.setarray([...props.stat.array,y])
      } 
      else{
        props.stat.setarray(props.stat.array.filter(x=>x!=y))
        setactive(false)
      }
    }
    return (
        <div  className="p-2 col-4 col-lg-3 rel " onClick={(y)=>o(props.item.title)}>
          
    <div className="border border-secondary rounded-3 position-relative p-0 pb-2 bg-gh  mb-2 mt-2 w-100 shadow">
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    </Head>
    
    <Image
      
      className='rounded-3 pointer1 '
      loader={() => `${props.item.src}?w=500px`}
      src={props.item.src}
      alt={props.item.title}
      width={600}
      height={600}
    />
     {active==true?<img className="cor w-100" src="cor.png"  alt="" />:""}
     <p className="text-center pitm text-light">
   {props.item.title}
    </p>
    
</div>
</div>
      );
}
 
export default ProdItemm;