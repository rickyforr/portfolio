import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { uiText } from "../../../system/uiText";

export default function Logo(props: { finishedLoading: boolean }) {
    return (
        <>
            <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    y: { delay: props.finishedLoading ? 0 : 5, duration: 0 },
                    opacity: {
                        delay: props.finishedLoading ? 0 : 5,
                        duration: 0,
                    },
                }}
                className=" relative h-12 w-10 "
            >
                <motion.span
                    initial={{ x: 1 }}
                    className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
                >
                    <div className="rounded-full border-AAsecondary border-2 border-solid width[100px] w-10 h-10 flex justify-center items-center">
                        <p>{uiText.logoCharacter}</p>
                    </div>
                </motion.span>
            </motion.div>
        </>
    );
}
