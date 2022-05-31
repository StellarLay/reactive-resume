import React from 'react';
import { motion } from 'framer-motion';

type BackdropProps = {
  children?: React.ReactNode;
};

const Backdrop = (props: BackdropProps) => {
  return (
    <motion.div
      className='backdrop'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Backdrop;
