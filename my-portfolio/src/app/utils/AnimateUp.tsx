"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";

interface props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const AnimateUp = ({ children, width = "fit-content" }: props) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);
    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 3, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.75, delay: .25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const AnimateLeft = ({ children, width = "fit-content" }: props) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);
    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 3, x: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.75, delay: .25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const AnimateRight = ({ children, width = "fit-content" }: props) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);
    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 3, x: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.75, delay: .25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}
