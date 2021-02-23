import React, { useState } from 'react';
import EditSwitch from '../comps/EditSwitch';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import Navbar from '../comps/Navbar';
import UploadForm from '../comps/UploadForm';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [edit, setEdit] = useState(false);

  // const handleEdit = (e) => {
  //   e.stopPropagation();
  //   setEdit(!edit);
  // };

  return (
    <div>
      <Navbar />
      <h1 className='title'>Your Gallery</h1>
      {/* <button className='btn-edit' type='button' onClick={handleEdit}>
        Edit Gallery
      </button> */}
      <EditSwitch edit={edit} setEdit={setEdit} />
      <UploadForm />
      <ImageGrid edit={edit} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Gallery;
