import {useState} from "react";

export default function Tabla({nombre, campos, filas}) {

    console.log(filas);
    console.log(campos);
    console.log(nombre);

    const [orden, setOrden] = useState(
        {
            campo: campos[0],
            ascendente: true
        }
    );


    const ordenar = (campo) => {
        /*setOrden(orden){

        }*/
    }
    return (

        <table>
            <thead>
            {
                campos.map((campo,index) => (
                    <th key={index}>
                        {campo}
                    </th>
                ))
            }
            </thead>
            <tbody>
            {
                filas.map((fila, index) => (
                    <tr key={index}>
                        {
                            campos.map((campo, index1) => (
                                <td key={index1}>
                                    {fila[campo]}
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>

    )
}
