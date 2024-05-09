"use client";
import React, { useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-md md:text-lg",
                className
            )}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Home"
                    ></MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Profile">
                    <div className="flex flex-col text-sm space-y-4">
                        <HoveredLink
                            href="https://ram-res.tiiny.site/"
                            target="_blank"
                        >
                            Resume
                        </HoveredLink>
                        <HoveredLink
                            href="https://www.linkedin.com/in/ram0011"
                            target="_blank"
                        >
                            Linked In
                        </HoveredLink>
                        <HoveredLink
                            href="https://github.com/Ram0011"
                            target="_blank"
                        >
                            Github
                        </HoveredLink>
                        <HoveredLink href="/profile" target="_blank">
                            About
                        </HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"#"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact Me"
                    ></MenuItem>
                </Link>
            </Menu>
        </div>
    );
};

export default Navbar;
