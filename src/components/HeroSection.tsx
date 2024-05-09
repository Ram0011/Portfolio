"use client";
import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

const HeroSection = () => {
    return (
        <div className="w-full">
            <WavyBackground className="max-w-4xl mx-auto pb-40 w-full">
                <div className="h-auto md:h-[50rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 pb-8 md:py-0 ">
                    <div className="p-4 relative z-10 w-full text-center mt-0 md:mt-[100px] ">
                        <h1 className="mt-[120px] md:mt-28 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-800 ">
                            Ramprakash Ramtekkar
                        </h1>
                        <p className="mt-10 md:mt-16 font-normal text-base md:text-lg lg:text-2xl text-white max-w-xl mx-auto">
                            I am a Full Stack Developer, with experience in
                            React.js, Node.js, and MongoDB, along with
                            cross-platform app development using React Native.
                        </p>
                        <div className="mt-20 md:mt-36 text-lg">
                            <Link
                                href="https://ram-res.tiiny.site/"
                                target="_blank"
                            >
                                <Button
                                    borderClassName="1.75rem"
                                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-300 dark:border-slate-800"
                                >
                                    My Resume
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </WavyBackground>
        </div>
    );
};

export default HeroSection;
