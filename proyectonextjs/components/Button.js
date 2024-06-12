//Boton personalizado

export default function Button ({ children, onClick}) {
    return(
        <button onClick={onClick} className="'bg-blue-500 text-white mx-4 px-8 py-2 rounded-md">
            {children}
        </button>

    )
}