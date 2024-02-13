import {Link} from "@inertiajs/react";

export default function NavLayout() {
    return (
        <>
            <nav className="h-10v bg-nav flex flex-row justify-center items-center
space-x-3 p-1">

                <a href="#" className="btn btn-sm  btn-neutral">Home</a>
                <a href="#" className="btn  btn-sm  btn-primary">About</a>
                <a href="#" className="btn  btn-sm  btn-info">Contacta</a>
                <Link href={route('proyectos.index')} className="btn  btn-sm  btn-neutral">Proyectos</Link>


                <a href="#" className="btn  btn-sm  btn-primary">Alumnos</a>
                <a href="#" className="btn  btn-sm  btn-info">Profesores</a>


            </nav>
        </>
    );
}
