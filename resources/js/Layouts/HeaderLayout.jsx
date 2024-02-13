import {Link} from "@inertiajs/react";
import {usePage} from "@inertiajs/react";
import {Inertia} from "@inertiajs/inertia";

export default function HeaderLayout() {

    const user = usePage().props.auth.user;

    const handleLogout=()=>{
        Inertia.post(route("logout"));
    }

    console.log(user);
    return (
        <>
            <header className="miheader">
                <img className="p-4 h-full" src="public/images/skull-snake-logo-AB7A800F42-seeklogo.com.png" alt="logo"/>
                <h1 className="text-4xl">Proyecto de laravel</h1>
                {user && (
                    <div>
                        {user.name}
                        <Link onClick={handleLogout} className="btn glass text-white">Logout</Link>
                    </div>
                )}
                {!user && (
                    <div>

                        <Link href={route('login')} className="btn glass text-white">Acceder</Link>
                        <Link href={route('register')} className="btn glass text-white">Registrarme</Link>
                    </div>
                )}
            </header>

        </>
    );
}
