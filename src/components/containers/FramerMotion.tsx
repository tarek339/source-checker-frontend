import { motion } from "framer-motion";
import { IFramerMotion } from "../../types/interfaces/components";

const FramerMotion = ({ children }: IFramerMotion) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
};

export default FramerMotion;
