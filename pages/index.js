import toast, { Toaster } from 'react-hot-toast';
import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

// LogIn Button
import LoginButton from '@/components/LoginButton';
import Line from '@/components/Line';
import Logbutton from '@/components/Logbutton'

import Headerimage from '@/components/header';
import Mano from '@/components/Mano';
import Buttonsend from '@/components/Buttonsend';


import { Typography } from "@material-tailwind/react";
import Link from 'next/link';


import Slider from 'react-infinite-logo-slider'


export default function Home() {
    //logica de la pagina en js
    const notifySucces = () => toast.success('Hello, world!');
    const notifyError = () => toast.error('Error!');
    const notifyLoad = () => toast.loading('Loading!');
    const loginBtn = () => LoginButton();



    return(
        <>

            <main class="w-full flex flex-col  gap-4 md:gap-36 mx-auto px-4 md:px-20 py-8 relative">



            <div className="navbar  -mb-20">
            <div className="navbar-start">
    
                <a className="btn btn-ghost text-xl">NextJs</a>
            </div>




            <div className=" bg-black rounded-full mb-12 px-8 py-1 text-white border-white hover:bg-white hover:border-black hover:text-black  relative navbar-end">
                <Logbutton className=""/>
                {/* <a className="btn">Button</a> */}
            </div>
            </div>

         

            {/* <section>
            <div className="absolute wrapper uppercase text-black font-bold">
                <h2 className='text-[180px] pl-36 -mt-28 tracking-tight'>
                <span>E</span>
                <span> </span>
                <span>S</span>
                <span> </span>
                <span>T</span>
                <span> </span>
                <span>B</span>
                </h2>

            </div> 
          */}

            <section>
            <div className="absolute wrapper uppercase text-black font-bold">
                <h2 className='text-[180px] pl-36 -mt-28 tracking-tight'>
                <span>E</span>
                <span> </span>
                <span>S</span>
                <span> </span>
                <span>T</span>
                <span> </span>
                <span>B</span>
                </h2>

            </div> 
            
            <div className="absolute wrapper  pl-96  text-black font-semibold">
                <div className='text-[70px] pl-96 -mt-44 tracking-tight'>
                <span> </span>
                <span className='whitespace-nowrap'>. </span>
                <h2 className='whitespace-nowrap pl-44'>segundo</h2>
                {' '}
                <h2 class="whitespace-pre -mt-10 pl-60">modulo</h2>
                </div>

            </div> 

            
            
            <div className="hero min-h-screen -pl-32 -mt-32 absolute ">
                <img src="https://res.cloudinary.com/dlme773n7/image/upload/v1718377646/dx22_qk0dzs.png" />
            </div>
            <div className=" hero min-h-screen -mt-30 ">
                <img src="https://res.cloudinary.com/dlme773n7/image/upload/v1718377439/img-azul_ybyp8r.jpg" />
            </div>
            </section>























            <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://res.cloudinary.com/dlme773n7/image/upload/v1718448732/fff_tynzhw.png" className="max-w-sm rounded-lg " />
                <div>

                <h1 className="text-6xl font-bold">About Me</h1>
                <p className="py-6 -mt-2 -ml-3 text-xl tracking-wide leading-relaxed">  with 3 years experience in creation <br/>
                                      With an interest in development areas <br/>
                                      three-dimensional modeling.</p>
                                    <br/>
                <h1 className="text-6xl font-bold">Hobbies</h1>
                <p className="py-6 text-xl tracking-wide">Within my hobbies are exercise, <br/>
                                    video games, tattoo, and <br/>
                                    science fiction movies..</p>
                </div>
            </div>
            </div>






    <div className='-mb-32'> <Line /></div>


                <section className="flex-1 flex-wrap grid grid-cols-5 items-center gap-4">
                    <div className=" col-span-1 col-start-2">
                        <a className="absolute uppercase font-bold text-6xl hover:text-sky-500" href="https://github.com/Esteban-FM">@Github</a>
                    </div>
                    <div className=" col-span-1 col-start-4">
                        <a className=" absolute uppercase font-bold text-6xl  hover:text-sky-500" href="https://www.linkedin.com/in/esteban-frescas-mariñelarena-7b0518210/">@linkedin</a>
                    </div>
                </section>    

    <div className='-mt-16'> <Line /></div>



        <br/>


        <div className=' -mb-28 flex-1 flex-wrap grid grid-cols-6 items-center gap-4'>
        <div className='col-span-7 col-start-1 '>

        <Buttonsend></Buttonsend>
        </div>
        </div>

        


      {/* <button className='mt-56  -mb-72  bg-black hover:bg-white  hover:text-white  h-32 text-black font-semibold mx-8 px-8 py-2 rounded-xl'/>
 */}


        <section>

{/* send */}
        <div className="hero min-h-screen -pl-32 -mt-80 absolute ">
                <img src=" https://res.cloudinary.com/dlme773n7/image/upload/v1718453459/sendtext_fdjv11.png" />
            </div>
          
{/* answer */}
        <div className="hero min-h-screen pr-20 -mt-48 absolute ">
                <img className='' src="https://res.cloudinary.com/dlme773n7/image/upload/v1718523123/dbdj_skmupu.png" />
            </div>

{/* mano */}
        <div className="hero min-h-screen pr-56 -mt-60 absolute ">
          <div className='pr-96'>
                <img className='pr-96' src="https://res.cloudinary.com/dlme773n7/image/upload/v1718523125/kj_aawy1d.png" />
                </div >
            </div>
          

     
          
          
        {/* <div className="hero min-h-screen -pl-32 -mt-96 absolute ">
                <img src="  https://res.cloudinary.com/dlme773n7/image/upload/v1718450743/answer_fcktrt.png" />
            </div>
           */}

     

            <div className=" hero min-h-screen -mt-96 ">
                <img src="https://res.cloudinary.com/dlme773n7/image/upload/v1718450727/do_rhpf3k.png" />
            </div>
        </section>














    <div className='-mb-32'> <Line /></div>


                <section className="flex-1 flex-wrap grid grid-cols-5 items-center gap-4">
                    <div className=" col-span-1 col-start-2">
                        <a className="uppercase font-bold text-6xl hover:text-yellow-300" href="https://api.whatsapp.com/send/?phone=526145162509&text=¡Hola%2C+Buen+día%21&type=phone_number&app_absent=0">@Whatsapp</a>
                    </div>
                    <div className=" col-span-1 col-start-4">
                        <a className="uppercase font-bold text-6xl  hover:text-yellow-300" href="mailto:esteban.fsma@gmail.com">@email</a>
                    </div>
                </section>

    <div className='-mt-32'> <Line /></div>




<footer className="footer footer-center -mt-32 p-4  text-base-content">
  <aside>
    <p>Copyright © 2024 - Proyecto NextJs </p>
  </aside>
</footer>


      </main>
        </>
    );
}