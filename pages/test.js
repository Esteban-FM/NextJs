import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";


export default function Test() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async() =>{
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
    };

    useEffect (()=> {
        fetchProducts();
    }, []);

    const sendEmail = async () => {
        const data = {
            "name": "Esteban FM",
            "email": "esteban.fsma@gmail.com",
            "message": "a ver si tan estudiado",
        };
        await axios.post ("/api/mail", data);
        toast.success("Email sent");
    };


    return (
    <div className="grid grid-cols-5 gap-4">
        <input type="email" placeholder="Email"/>
        <button onClick={sendEmail}>Send Email</button>

        {products && products.length>0 && products.map((product)=>(
            <div key={product.id}>
                <Image
                unoptimized
                src={product.image}
                alt= {product.name}
                width={200}
                height={300}/>

                {product.title}
            </div>
        ))}
    </div>
    );
}
