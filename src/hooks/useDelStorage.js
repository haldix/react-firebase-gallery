import { useState } from 'react';
import toast from 'react-hot-toast';
import { projectStorage, projectFirestore } from '../firebase/config';

const useDelStorage = (collection) => {
  const [error, setError] = useState(null);

  const handleDelete = async (e, doc) => {
    e.stopPropagation();
    try {
      await projectFirestore.collection(collection).doc(doc.id).delete();

      const storageRef = projectStorage.ref(doc.fileName);
      await storageRef.delete();

      toast.success(`Image ${doc.fileName} deleted from Gallery.`);
    } catch (err) {
      setError(err.message);
    }
  };

  return [handleDelete, error];
};

export default useDelStorage;
