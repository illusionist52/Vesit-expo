import React, { useState, useEffect } from "react";
import { inView, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const TypingTextAnimation = ({ text, speed = 50 }) => {
  const controls = useAnimation();
  const [displayedText, setDisplayedText] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i <= text.length; i++) {
        setDisplayedText(text.slice(0, i));
        await controls.start({ opacity: 1, transition: { duration: 0.5 } });
        await controls.start({ opacity: 0, transition: { duration: 0.5 } });
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    animateText();
  }, [text, speed, controls, inView]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {displayedText}
    </motion.div>
  );
};

export default TypingTextAnimation;
