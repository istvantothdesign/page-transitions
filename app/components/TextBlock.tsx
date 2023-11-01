"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  heading?: string;
  children: any;
  isVisible?: boolean;
}

export default function TextBlock({
  heading,
  children,
  isVisible = true,
}: Props) {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "-25%" });

  const animation = {
    // initial: { y: "100%" },
    initial: { opacity: 0 },

    enter: (i: any) => ({
      // y: "0",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        // delay: 0.075 * i,
        delay: 0.4,
      },
    }),
  };

  return (
    <div
      ref={body}
      className="flex gap-8 items-center p-12 bg-green-300 rounded-lg"
    >
      <motion.div
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
      >
        <Image src={"/portrait.png"} alt="Image" width={200} height={200} />
      </motion.div>
      <div>
        <h2 className="font-bold text-2xl">{heading}</h2>
        {children}
      </div>
    </div>
  );
}
