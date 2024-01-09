import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({ children }) {
  const mainControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="relative overflow-hidden w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.45 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
