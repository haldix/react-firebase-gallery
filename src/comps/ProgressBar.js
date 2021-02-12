import React, { useEffect } from 'react';
import useAddStorage from '../hooks/useAddStorage';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url, error } = useAddStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
    if (error) {
      toast.error(error);
    }
  }, [url, setFile, error]);

  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
};

export default ProgressBar;
