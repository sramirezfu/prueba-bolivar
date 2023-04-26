import Link from "next/link"
import { FC, useEffect, useLayoutEffect, useState } from "react";
import LoginComp from "../login/Login";

const Navbar: FC = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState('');

    const logout = () => {
        window.localStorage.removeItem("token");
        setLoggedIn('');
    }

    useLayoutEffect(() => {
        setLoggedIn(window.localStorage.getItem("token") || '');
    }, []);

    return (
        <>
            <nav className="bg-cb-primary py-6">
                <div className="container flex items-center justify-between flex-wrap" >
                    <div className="flex items-center  text-cb-secondary text-[18px] mr-[70px]">
                        <Link href="/" className="font-bold">
                            TO MUSIC
                        </Link>
                    </div>
                    <div className="flex w-auto flex-grow text-sm">
                        <Link href="/search" className="block mr-4 lg:inline-block lg:mt-0 text-white text-[16px]">
                            Buscar
                        </Link>
                    </div>

                    <div className="block lg:inline-block lg:mt-0 text-white text-[16px]">
                        {loggedIn ?
                            <span className="block mr-4 lg:inline-block lg:mt-0 text-white text-[16px] cursor-pointer" onClick={logout}>
                                Logout
                            </span>
                            :
                            <span className="block mr-4 lg:inline-block lg:mt-0 text-white text-[16px] cursor-pointer" onClick={() => setOpenLogin((prev) => !prev)}>
                                Login
                            </span>
                        }
                    </div>
                </div >
            </nav >
            {openLogin &&
                <LoginComp />
            }
        </>
    )
}

export default Navbar;