import React from 'react';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import Title from '../comps/Title';
import UploadForm from '../comps/UploadForm';

const Gallery = ({ handleEdit, edit, selectedImg, setSelectedImg }) => {
  return (
    <div>
      <Title />
      <UploadForm handleEdit={handleEdit} />
      <ImageGrid edit={edit} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Gallery;
