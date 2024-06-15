//Boton personalizado

export default function Button ({ children, onClick}) {
    return(
        <button onClick={onClick} className="mt-10 w-5/6 bg-black hover:bg-white  hover:text-white    h-32 text-black font-semibold mx-8 px-8 py-2 rounded-xl">
            {children}
        </button>

    );
}