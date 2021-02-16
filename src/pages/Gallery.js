import React from 'react';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import Navbar from '../comps/Navbar';
import UploadForm from '../comps/UploadForm';

const Gallery = ({ handleEdit, edit, selectedImg, setSelectedImg }) => {
  return (
    <div>
      <Navbar />
      <h1 className='title'>Your Gallery</h1>
      <UploadForm handleEdit={handleEdit} />
      <ImageGrid edit={edit} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Gallery;
