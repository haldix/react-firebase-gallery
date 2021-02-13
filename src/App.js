import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { Toaster } from 'react-hot-toast';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log('Edit');
    setEdit(!edit);
  };

  return (
    <div className='App'>
      <Title />
      <UploadForm handleEdit={handleEdit} />
      <ImageGrid edit={edit} setSelectedImg={setSelectedImg} />
      <Toaster position='bottom-center' />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
