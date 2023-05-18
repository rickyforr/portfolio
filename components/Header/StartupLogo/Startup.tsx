import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

const Startup = () => {
    let WidthBy2 = 0;
    let HeightBy2 = 0;
    let greaterThanSmall = false;
    if (typeof window !== "undefined") {
        if (window.innerWidth > 768) {
            WidthBy2 = window.innerWidth / 2 - 48 - 20;
            HeightBy2 = window.innerHeight / 2 - 44;
            greaterThanSmall = true;
        } else {
            WidthBy2 = window.innerWidth / 2 - 28;
            HeightBy2 = window.innerHeight / 2 - 40;
        }

        console.log("width by 2: ", WidthBy2);
    }

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ opacity: { delay: 4.9, duration: 0 } }}
            className="absolute h-full w-full flex justify-center items-center bg-StartupBackground"
        >
            <motion.div
                initial={{ opacity: 0, x: 0, y: 0, scale: "100%" }}
                animate={{
                    opacity: [1, 0, 1],
                    x: -WidthBy2,
                    y: -HeightBy2,
                    scale: greaterThanSmall ? "57%" : "50%",
                }}
                transition={{
                    opacity: { delay: 3, duration: 1.5 },
                    x: { duration: 0.5, delay: 4.5 },
                    y: { duration: 0.5, delay: 4.5 },
                    scale: { duration: 0.5, delay: 4.5 },
                }}
                className="relative  h-24 w-24 flex justify-center items-center"
            >
                <motion.span
                    initial={{ scale: 0, y: -4, x: -1 }}
                    animate={{ scale: 1 }}
                    transition={{ scale: { delay: 1.5, duration: 1.5 } }}
                    className="text-AAsecondary font-Text2 text-4xl"
                >
                    Rich
                </motion.span>
            </motion.div>
        </motion.div>
    );
};
export default Startup;
