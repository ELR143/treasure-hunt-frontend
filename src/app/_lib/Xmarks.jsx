import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function Xmarks() {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      className="w-full mt-10"
    >
   
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#EE4B2B"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        stroke="#EE4B2B"
        variants={draw}
        custom={2.5}
      />
     
    </motion.svg>
  );
}
