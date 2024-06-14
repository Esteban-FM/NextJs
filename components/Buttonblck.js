//Boton personalizado

export default function Button ({ children, onClick}) {
    return(
        <button onClick={onClick} className="bg-black rounded-full px-8 py-1 text-white border-white hover:bg-white hover:border-black hover:text-black ">
            {children}
        </button>

    );
}