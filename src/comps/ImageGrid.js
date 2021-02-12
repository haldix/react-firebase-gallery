import React from 'react';
import useSubFirestore from '../hooks/useSubFirestore';
import useDelStorage from '../hooks/useDelStorage';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useSubFirestore('images');
  const [handleDelete, error] = useDelStorage();
  if (error) {
    toast.error(error);
  }

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='img-wrap'
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt='uploaded pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <button onClick={(e) => handleDelete(e, doc)}>Delete</button>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
