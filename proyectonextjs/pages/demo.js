import toast, { Toaster } from 'react-hot-toast';

export default function Demo() {
    //logica de la pagina en js
    const notifySucces = () => toast.success('Hello, world!');
    const notifyError = () => toast.error('Error!');
    const notifyLoad = () => toast.loading('Loading!');



    return(
        <>
        <Toaster/>
        <p>Aca va todo el html</p>
        <button onClick={notifySucces} className='bg-blue-500 text-white mx-4 px-8 py-2 rounded-md '>Notify</button>
        <button onClick={notifyError} className='bg-red-500 text-white mx-4 px-8 py-2 rounded-md '>Error</button>
        <button onClick={notifyLoad} className='bg-gray-500 text-white mx-4 px-8 py-2 rounded-md '>Load</button>
        </>
    )
}