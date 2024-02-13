import Layout from "@/Layouts/Layout.jsx";

export default function Main() {

    return (
        <>

            <Layout>
                <div className="miheader">Ejemplo</div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                             className="max-w-sm rounded-lg shadow-2xl"/>
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                {/*el contenido es el children, se lo pasa al mainlayout y el mainlayout lo visualiza*/}
            </Layout>


            {/*<h2 className="text-black text-2xl animate-glow dark:bg-black/10 dark:ring-1">Otro título</h2>*/}
        </>

    )


}
