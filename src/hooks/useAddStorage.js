import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';

const useAddStorage = (file, collection) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection(collection);

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err.message);
      },
      async () => {
        try {
          const url = await storageRef.getDownloadURL();
          const createdAt = timestamp();

          // TODO: somehting
          await collectionRef.add({ url, createdAt, fileName: file.name });
          setUrl(url);
          toast.success(`Image ${file.name} added to Gallery!`);
        } catch (err) {
          setError(err.message);
        }
      }
    );
  }, [file, currentUser]);

  return { progress, url, error };
};

export default useAddStorage;
