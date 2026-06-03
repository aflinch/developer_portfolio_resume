import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
    texts: string[];
}

export function TypewriterTitle({ texts }: TypewriterProps) {
    const [textIndex, setTextIndex] = useState(0);
    const count = useMotionValue(0);

    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        texts[textIndex].slice(0, latest)
    );

    // Split the animated text into the "base text" and the "last word"
    const splitText = useTransform(displayText, (latest) => {
        const words = latest.split(" ");

        if (words.length <= 1) {
            return { base: latest, lastWord: "" };
        }

        const lastWord = words[words.length - 1];
        const base = words.slice(0, -1).join(" ") + " ";

        return { base, lastWord };
    });

    // Derived transforms so we can map them directly to JSX
    const baseText = useTransform(splitText, (s) => s.base);
    const highlightedWord = useTransform(splitText, (s) => s.lastWord);

    useEffect(() => {
        const controls = animate(count, texts[textIndex].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onComplete: () => {
                setTimeout(() => {
                    const deleteControls = animate(count, 0, {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                        onComplete: () => {
                            setTextIndex((prev) => (prev + 1) % texts.length);
                        },
                    });
                    return () => deleteControls.stop();
                }, 3000);
            },
        });

        return () => controls.stop();
    }, [textIndex, texts, count]);

    return (
        <motion.h1 className="hero-section-title">
            {/* The main text */}
            <motion.span>{baseText}</motion.span>

            {/* The highlighted last word */}
            <motion.span className="sub-color">
                {highlightedWord}
            </motion.span>

            {/* Blinking Cursor */}
            <motion.span className="sub-color"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                style={{ fontWeight: "inherit", marginLeft: "2px" }}
            >
                |
            </motion.span>
        </motion.h1>
    );
}