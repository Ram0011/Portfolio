import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <div className="px-10 pb-20 bg-slate-950">
            <h1 className="text-4xl pb-20 pt-5">Contact</h1>
            <div className="flex justify-center mx-auto gap-x-52">
                <Link
                    href={"https://www.linkedin.com/in/ram0011"}
                    target="_blank"
                >
                    <Image
                        src={"/linkedin-original.svg"}
                        alt="linkedin"
                        width={50}
                        height={50}
                        className="h-14 w-14 mb-4"
                    />
                    LinkedIn
                </Link>
                <Link
                    href={"mailto:ramprakashramtekkar@gmail.com"}
                    target="_blank"
                >
                    <Image
                        src={"/email.svg"}
                        alt="email"
                        width={50}
                        height={50}
                        className="h-14 w-14 mb-4"
                    />
                    Email
                </Link>
            </div>
        </div>
    );
};

export default Contact;
