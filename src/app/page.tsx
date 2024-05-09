import About from "@/components/About";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="../../public/favicon.svg" />
            </Head>
            <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
                <HeroSection />
                <FeaturedCourses />
                <About />
                <Contact />
            </main>
        </>
    );
}
