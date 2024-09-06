import React from 'react';
import Link from "next/link";
import {Links} from "@/app/_NavBar/Consts";
import Image from "next/image";


const Nav = () => {
    return (
        <nav className={'h-screen w-[250px]'}>
            <div className={'w-full h-full flex flex-col justify-center items-center gap-20 '}>
                <Image
                    src={'/icons/mercedes.svg'}
                    alt={'merco'}
                    width={75}
                    height={55}
                />
                {
                    Links.map((link, index) => (
                        <Link href={link.href} className={'capitalize '}>- {link.name} -</Link>
                    ))
                }
            </div>
        </nav>
    );
};

export default Nav;