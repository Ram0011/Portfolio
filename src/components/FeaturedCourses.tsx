"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

interface Course {
    id: number;
    title: string;
    slug: string;
    link: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter(
        (course: Course) => course.isFeatured
    );

    return (
        <div className="bg-slate-950 pb-14">
            <div>
                <div className="text-center">
                    <LampContainer>
                        <motion.h1
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                        >
                            My Projects
                        </motion.h1>
                    </LampContainer>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-32 justify-center mx-auto">
                    {featuredCourses.map((course: Course) => (
                        <div className="flex justify-center" key={course.id}>
                            <BackgroundGradient className="flex flex-col rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-2xl text-black mt-4 dark:text-neutral-200">
                                        {course.title}
                                    </p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mt-2 align-text-top">
                                        {course.description}
                                    </p>
                                    <Link
                                        href={`${course.link}`}
                                        target="_blank"
                                        className="mt-4 "
                                    >
                                        More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link
                    href={"https://github.com/Ram0011"}
                    target="_blank"
                    className="px-4 py-2 rounded-md border border-neutral-600 text-white bg-slate-800 hover:bg-gray-400 transition duration-200"
                >
                    View all Projects
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCourses;
