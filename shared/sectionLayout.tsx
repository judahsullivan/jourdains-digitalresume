import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const SectionLayout = ({ id,children }) => {
  const sectionRef = useRef(null);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box as="section" id={id} ref={sectionRef}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={
          sectionRef.current && sectionRef.current.getBoundingClientRect().top < window.innerHeight * 0.75
            ? "visible"
            : "hidden"
        }
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default SectionLayout;
