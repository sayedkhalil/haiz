import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import { useRouter } from "next/router";

const Cover = (props) => {
        const router = useRouter()

       return (  
        <div className=" rela">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
 <img className="w-100 h-90 " src="cover.png" alt="" />
 <div className="divcover">
   <p className="w-100 text-center  my-4 tit">حيز يعبر عنك</p>     
   <p className="w-100 text-end text-light mt-5 p-3 start">ابدأ مشروعك</p>     
   <div className="row mt-4 mx-3  div-row p-2">
        <img className="col-2 p-3" src="arrow.svg" alt="" />
        <div className="col-10 p-2" onClick={()=>router.push("/service")}>
                <p className="div-tit">
                        خدمة التأثيث
                </p>
                <p className="text-end text-light div-des">
                نقدم خدمة تأثيث متكاملة وحلول تصميمية لمساحتك تلبي جميع احتياجاتك الوظيفية وميزانيتك , تحقيق رؤيتك للمساحات المثالية و حلولًا مبتكرة لتحسين استغلال المساحات 
                </p>

        </div>
   </div>  
   <div className="row mt-3 mx-3  div-row p-2"onClick={()=>router.push("/consuit")}>
        <img className="col-2 p-3" src="arrow.svg" alt="" />
        <div className="col-10 p-2">
                <p className="div-tit">
                خدمة استشارة
                </p>
                <p className="text-end text-light div-des">
                نقدّم حلول تصميمة مبتكرة لمساحتك إما عن طريق الزيارة او عن بعد لمدة ساعة
                </p>

        </div>
   </div>  
              <a className="btn  btn-sm d-block d-lg-none dfe" href="" download>تحميل  سابقة الأعمال</a>
              <a className="btn btn-success btn-lg d-none d-lg-block d-xl-block dfee" href="" download>تحميل بروفايل الشركة</a>
</div>
</div>
    );
}
 
export default Cover;