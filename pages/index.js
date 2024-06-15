import toast, { Toaster } from 'react-hot-toast';
import Button from '@/components/Button';
import Image from 'next/image';


// LogIn Button
import LoginButton from '@/components/LoginButton';



import Headerimage from '@/components/header';
import Mano from '@/components/Mano';

export default function Home() {
    //logica de la pagina en js
    const notifySucces = () => toast.success('Hello, world!');
    const notifyError = () => toast.error('Error!');
    const notifyLoad = () => toast.loading('Loading!');
    const loginBtn = () => LoginButton();



    return(
        <>
{/* 
        <LoginButton/> */}
 <main className='container mx-auto'>


    <div className="wrapper uppercase text-black font-bold">
        <h2 className='text-[110px] pl-5 -mt-1 tracking-wider'>
          <span>E</span>
          <span>S</span>
          <span>T</span>
          <span>B</span>
        </h2>



    </div>


        <Headerimage/>
        <Mano/>
   



   
{/* 
        <Toaster/>
        <p>Aca va todo el html</p>
        <button onClick={notifySucces} className='bg-blue-500 text-white mx-4 px-8 py-2 rounded-md '>Notify</button>
        <button onClick={notifyError} className='bg-red-500 text-white mx-4 px-8 py-2 rounded-md '>Error</button>
        <button onClick={notifyLoad} className='bg-gray-500 text-white mx-4 px-8 py-2 rounded-md '>Load</button> */}

        {/* botones por componentes */}
        {/* <Button onClick={notifySucces}>Notify</Button>
        <br/>
        <Button onClick={notifyError}>NotifyBad</Button>

  */}




</main>
        </>
    )
}