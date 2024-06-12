import toast, { Toaster } from 'react-hot-toast';


export default function Demo() {
    //logica de la pagina en js
    const notify = () => toast.success('Hello, world!');




    return(
        <>
        <Toaster/>
        <p>Aca va todo el html</p>
        <button onClick={notify} className='bg-blue-500 text-white px-8 py-2 rounded-md '>Notify</button>
        </>
    )
}