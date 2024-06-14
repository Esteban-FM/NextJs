//Boton personalizado

export default function Button ({ children, onClick}) {
    return(
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-300 hover:text-blue-800 text-white font-semibold mx-4 px-8 py-2 rounded-md">
            {children}
        </button>

    );
}