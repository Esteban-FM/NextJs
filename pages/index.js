import toast, { Toaster } from 'react-hot-toast';
import Button from '@/components/Button';
import Image from 'next/image';
// LogIn Button
import LoginButton from '@/components/LoginButton';


import Headerimage from '@/components/header';
import Mano from '@/components/Mano';
import Pruebaheader from '@/public/prueba.png'

export default function Demo() {
    //logica de la pagina en js
    const notifySucces = () => toast.success('Hello, world!');
    const notifyError = () => toast.error('Error!');
    const notifyLoad = () => toast.loading('Loading!');



    return(
        <>
        <h1>Next.js + NextAuth.js</h1>
        <LoginButton/>

    <div className="wrapper uppercase text-black font-bold">
        <h2>
          <span class="text">E</span>
          <span class="text">S</span>
          <span class="text">T</span>
          <span class="text">B</span>
          <span class="text">N</span>
        </h2>
     
    </div>

    

        <Mano></Mano>
        <Headerimage></Headerimage>

 
        <div>

        <Toaster/>
        <p>Aca va todo el html</p>
        <button onClick={notifySucces} className='bg-blue-500 text-white mx-4 px-8 py-2 rounded-md '>Notify</button>
        <button onClick={notifyError} className='bg-red-500 text-white mx-4 px-8 py-2 rounded-md '>Error</button>
        <button onClick={notifyLoad} className='bg-gray-500 text-white mx-4 px-8 py-2 rounded-md '>Load</button>
         
        {/* botones por componentes */}
        <Button onClick={notifySucces}>Notify</Button>
        <br/>
        <Button onClick={notifyError}>NotifyBad</Button>

        </div>





        </>
    )
}