import React, { useEffect } from 'react';
import useAddStorage from '../hooks/useAddStorage';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';

const ProgressBar = ({ file, setFile }) => {
  const { currentUser } = useAuth();
  const { progress, url, error } = useAddStorage(
    file,
    `users/${currentUser.uid}/images`
  );

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
