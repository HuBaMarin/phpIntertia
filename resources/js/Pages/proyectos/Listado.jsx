import Layout from "@/Layouts/Layout.jsx";
import {useState} from "react";
import Tabla from "@/Components/Tabla.jsx";

export default function Listado({nombre, campos, filas}) {

    const [message, setMessage] = useState("Valor inicial");

    //const handleText=(e)=>setMessage(e.target.value);
    return (
        <Layout>
            <Tabla nombre={nombre}  campos={campos} filas={filas} ></Tabla>
        </Layout>
    )
}

