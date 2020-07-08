import React from "react";
import MotionBox from "../MotionBox";
import { AnimatePresence } from "framer-motion";
const Page = ({ children, ...props }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <MotionBox
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </MotionBox>
    </AnimatePresence>
  );
};

export default Page;
