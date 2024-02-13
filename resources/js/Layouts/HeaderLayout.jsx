export default function HeaderLayout(){
    return (
        <>
            <header className="miheader">
                <img className="p-4 h-full" src="images/logo.png" alt="logo"/>
                <h1 className="text-4xl">Proyecto de laravel</h1>
                <div>
                    <a href="#" className="btn glass text-white">Acceder</a>
                    <a href="#" className="btn glass text-white">Registrarme</a>
                </div>
            </header>


        </>
    );
}
