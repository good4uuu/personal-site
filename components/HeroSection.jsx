import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroSection = () => {
    return(
        <main className="py-16 mt-16 md:flex md: shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ duration: 0.5}}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                <h1 className="font-extrabold">
                    <span className="text-white text-8xl">
                        Hello, I&apos;m {" "}
                        <span className="text-transparent bg-clip-text sm:text-7xl md:text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            An Ning
                        </span>
                    </span>
                    <span className="text-7xl">
                        <TypeWritter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString`<span style="color:#FF77FF">Web Developer</span>`
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString`<span style="color:#9E78FF">Backend Developer</span>`
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                            }}
                        >
                        </TypeWritter>
                    </span>
                </h1>
                <p className="text-sky-100 mt-8 text-base sm:text-lg md:text-xl mb-6">
                    Slide down to know more about me!
                </p>
                    <Link
                        href="#projects" 
                        className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-indigo-600 hover:bg-violet-600">
                        <span className="text-xl text-white">Projects</span>
                    </Link>
                    <Link 
                        href="https://drive.google.com/file/d/1jmZHBV_nXqPKTtnxT3vjpDcDw8bPmV8g/view?usp=sharing"
                        className="px-6 inline-block py-3 rounded-full border-2 border-pink-500 hover:bg-pink-400">
                        <span className="text-xl text-white">View my Resume</span>
                    </Link>
                </motion.div>
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                    <div className="w-[400px] h-[370] relative z-0">
                        <img 
                            src="/profile_picture.jpeg"
                            alt="Profile picture"
                            className="transform rounded-full flex relative -translate-x-1/2 top-1/2 left-1/2"
                            width={450}
                            height={400}
                        />
                    </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default dynamic(() => Promise.resolve(HeroSection), {ssr: false});