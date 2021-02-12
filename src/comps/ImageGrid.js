import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  const handleDelete = (e, doc) => {
    e.stopPropagation();
    projectFirestore
      .collection('images')
      .doc(doc.id)
      .delete()
      .then(() => console.log('doc deleted from FireStore'))
      .catch((err) => console.log(err));

    const storageRef = projectStorage.ref(doc.fileName);
    storageRef
      .delete()
      .then(() => console.log('File deleted from Bucket'))
      .catch((err) => console.warn(err));
  };
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
