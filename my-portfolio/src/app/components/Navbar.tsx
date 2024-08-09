"use client";
import Link from "next/link";
import React, { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { AnimateUp } from "../utils/AnimateUp";

interface CustomLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    href: string
    children: React.ReactNode
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}

const Navbar = () => {
    const [header, setHeader] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    React.useEffect(() => {

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <div className={header ? "top-0 w-[100%] py-5 sm:px-6 md:px-12 lg:px-24 fixed bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-800 z-10" : "sm:mt-10 mt-14 sm:px-6 lg:px-20"}>
            <div className="flex justify-between lg:text-xl font-regular font-serif tracking-wider">
                <div>
                    <AnimateUp>
                        <Link href="#">Ralph T.</Link>
                    </AnimateUp>
                </div>
                <div className="lg:space-x-20 hidden lg:flex ">
                    <AnimateUp>
                        <CustomLink href="#About">About</CustomLink>
                    </AnimateUp>
                    <AnimateUp>
                        <CustomLink href="#Works">Works</CustomLink>
                    </AnimateUp>
                    <AnimateUp>
                        <CustomLink href="#Footer">Contacts</CustomLink>
                    </AnimateUp>

                </div>
                <div className="lg:block hidden">
                    <AnimateUp>
                        <Link href="/resume">Resume</Link>
                    </AnimateUp>
                </div>
                <div className="lg:hidden">
                    <AnimateUp>
                        <Link href="/resume">Menu</Link>
                    </AnimateUp>
                </div>
            </div>
        </div>
    )
}

export default Navbar
