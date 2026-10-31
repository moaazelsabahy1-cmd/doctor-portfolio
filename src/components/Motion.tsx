"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Reveal({ children, className, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.16 }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.12 }}
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, className, ...props }: HTMLMotionProps<"div">) {
  return <motion.div className={className} variants={reveal} {...props}>{children}</motion.div>;
}
