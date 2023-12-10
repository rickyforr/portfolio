import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { uiText } from "../../../system/uiText";

export default function MyName() {
    return (
        <div
            className="h-full flex flex-col justify-center px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 text-center"
        >
            <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    opacity: {
                        delay: 1.4,
                        duration: 0.2,
                    },
                    y: {
                        delay: 1.4,
                        duration: 0.2,
                    },
                }}
                className="text-AAsecondary font-mono"
            >
                {uiText.myNameIsText1}
            </motion.span>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    opacity: {
                        delay: 1.5,
                        duration: 0.2,
                    },
                    y: {
                        delay: 1.5,
                        duration: 0.2,
                    },
                }}
                className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
            >
                {uiText.myNameIsText2}
            </motion.h1>
            <MyNameBlurb />
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    opacity: {
                        delay: 1.8,
                        duration: 0.2,
                    },
                    y: {
                        delay: 1.8,
                        duration: 0.2,
                    },
                }}
                className="mt-12"
            >
                <a href={"/resume20231210.pdf"} target={"_blank"} rel="noreferrer">
                    <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
                        {uiText.checkoutMyResumeButtonText}
                    </button>
                </a>
            </motion.div>
        </div>
    );
}

const MyNameBlurb = () => (
    <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
            opacity: {
                delay: 1.7,
                duration: 0.2,
            },
            y: {
                delay: 1.7,
                duration: 0.2,
            },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
    >
        I&apos;m a <span className="text-AAsecondary">software engineer</span>{" "}
        with a passion for bringing ideas to life.
        <br className="md:block hidden" />
        Currently I&apos;m focused on developing{" "}
        <span className="text-AAsecondary">Web3</span> applications.
    </motion.h3>
);
