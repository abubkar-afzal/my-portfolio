import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
};

export default function FadeInWhenVisible({
  children,
  direction = "up",
  delay = 0,
}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      transition: { duration: 0.4 },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
