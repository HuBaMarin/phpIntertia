import Layout from "@/Layouts/Layout.jsx";

export default function Listado({proyectos}) {
    return (
        <Layout>
            <table>
                <tbody>
                <tr>
                    <th>Titulo</th>
                    <th>URLs</th>
                    <th>Horas</th>
                </tr>

                {proyectos.map((datos,index)=> ((
                    <tr>
                        <td> {datos.titulo}</td>
                        <td>{datos.url}</td>
                        <td>{datos.horas}</td>
                    </tr>
                )))}
                </tbody>
            </table>
        </Layout>
    )
}
