"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../app/lib/utils";
import Link from "next/link";

export default function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-5np0", className)}>
            <Menu setActive={setActive}>

                <Link href="/service">

                    <MenuItem setActive={setActive} active={active} item="Service">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
                <Link href="/contact"><MenuItem setActive={setActive} item="Contact"></MenuItem></Link>
                <Link href="/about"><MenuItem setActive={setActive} item="About"></MenuItem></Link>
            </Menu>
        </div>
    )
}