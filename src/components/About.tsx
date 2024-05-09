"use client";
import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 pb-20 ">
            <div className="col-span-2 pl-10 pt-10 h-[32rem]">
                <h1 className="text-4xl">About Me</h1>
                <p
                    className="pt-10 px-0 md:pr-8 text-md md:text-xl "
                    style={{ lineHeight: "1.8" }}
                >
                    As a Full Stack Developer with hands-on experience in
                    React.js, Node.js, and MongoDB, I thrive on building robust
                    web applications. From spearheading projects like Airbnb and
                    OYO clones to crafting seamless user experiences with
                    cross-platform app development using React Native, I&apos;ve
                    honed my skills in both frontend and backend technologies.
                    My passion for problem-solving, coupled with a
                    Bachelor&apos;s degree in Electronics Engineering and
                    certifications in web development, drives me to excel in
                    creating innovative solutions that make a difference.
                </p>
            </div>
            <div className="col-span-2 h-[32rem]">
                <Image
                    src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
                    alt="gif"
                    height={500}
                    width={500}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default About;
